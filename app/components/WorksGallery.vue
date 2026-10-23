<template>
  <div
    v-if="pending"
    class="absolute inset-0 flex items-center justify-center bg-black"
    aria-label="Loading works"
  >
    <span class="text-white/50 text-sm tracking-wide">Loading&hellip;</span>
  </div>

  <div
    v-else-if="error"
    class="absolute inset-0 flex items-center justify-center bg-black"
    role="alert"
  >
    <span class="text-white/50 text-sm tracking-wide">
      Could not load works. Please refresh the page.
    </span>
  </div>

  <div
    v-else
    class="absolute inset-0 bg-black max-md:relative max-md:inset-auto max-md:min-h-[100dvh]"
  >
    <!-- Desktop: grid first, slideshow after selecting a work -->
    <div
      class="relative hidden h-full w-full md:block"
      @wheel="handleDesktopSlideshowWheel"
    >
      <WorksGalleryGrid
        v-if="!isDesktopSlideshowOpen"
        :works="works"
        @select="openDesktopSlideshow"
      />

      <template v-else>
        <SlideshowSlide
          v-for="(work, index) in works"
          :key="work.id"
          :work="work"
          :slide-index="index"
          :is-active="currentIndex === index"
          :background-work="backgroundWork"
          :preview-work="previewWork"
          :is-navigating-with-arrows="isNavigatingWithArrows"
          :is-preview-playing="isPreviewPlaying"
          :preview-index="previewIndex"
          :show-watch-button="hasVideo(work)"
          :origin="origin"
          @play-preview="(videoIndex) => playPreview(videoIndex)"
          @toggle-playback="togglePlayback"
          @hover="handleHover"
          @prev="prevSlide"
          @next="nextSlide"
          @nav-hover="handleNavHover"
          @youtube-ready="(player, i) => registerYoutubePlayer(i, player)"
          @vimeo-ready="(player, i) => registerVimeoPlayer(i, player)"
          @vimeo-destroy="unregisterVimeoPlayer"
          @player-ended="onPlayerEnded"
        />

        <SlideshowIndicators
          :works="works"
          :current-index="currentIndex"
          :preview-index="previewIndex"
          :hovered-indicator-index="hoveredIndicatorIndex"
          @indicator-click="onIndicatorClick"
          @show-preview="showPreview"
          @set-hovered-indicator="setHoveredIndicator"
          @indicators-enter="handleIndicatorsEnter"
          @indicators-leave="handleIndicatorsLeave"
        >
          <template #leading>
            <SlideshowBackToGrid @click="closeDesktopSlideshow" />
          </template>
        </SlideshowIndicators>
      </template>
    </div>

    <!-- Mobile: vertical compact cards (hidden at md+ where slideshow shows) -->
    <WorksGalleryMobile
      v-if="works.length"
      v-show="!isPreviewPlaying"
      :works="works"
      :has-video="hasVideo"
      @play-preview="handleMobilePlayPreview"
    />

    <WorksGalleryMobileVideo
      v-if="isPreviewPlaying && !isDesktopLayout"
      :work="works[currentIndex]"
      :slide-index="currentIndex"
      :origin="origin"
      @toggle-playback="togglePlayback"
      @youtube-ready="(player, i) => registerYoutubePlayer(i, player)"
      @vimeo-ready="(player, i) => registerVimeoPlayer(i, player)"
      @vimeo-destroy="unregisterVimeoPlayer"
      @player-ended="onPlayerEnded"
    />

    <SlideshowPlaybackControls
      v-if="isPreviewPlaying"
      :is-paused="isPlaybackPaused"
      @rewind="rewindVideo"
      @toggle="togglePlayback"
      @close="stopPreview"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  'preview-playing': [value: boolean]
  'desktop-view-change': [view: 'grid' | 'slideshow' | null]
}>()

const { works, pending, error } = useSlideshowWorks()

const isDesktopSlideshowOpen = ref(false)
const homeScrollRoot = useHomeScrollRoot()
const isDesktopLayout = ref(
  import.meta.client ? window.matchMedia('(min-width: 768px)').matches : false,
)

const worksGalleryDesktopView = computed<'grid' | 'slideshow' | null>(() => {
  if (!isDesktopLayout.value) return null
  return isDesktopSlideshowOpen.value ? 'slideshow' : 'grid'
})

watch(worksGalleryDesktopView, (view) => emit('desktop-view-change', view), {
  immediate: true,
})

const {
  currentIndex,
  previewIndex,
  hoveredIndicatorIndex,
  isNavigatingWithArrows,
  activeIndexForBackground,
  goToSlide,
  nextSlide: navNext,
  prevSlide: navPrev,
  showPreview,
  handleIndicatorsEnter,
  handleIndicatorsLeave,
  setHoveredIndicator,
  handleIndicatorClick,
  handleNavHover,
  isNavHovered,
  setupKeyboardListener,
} = useSlideNav(works)

const backgroundWork = computed(() => {
  if (!works.value?.length) return undefined
  return works.value[activeIndexForBackground.value]
})

const previewWork = computed(() => {
  if (previewIndex.value === null || !works.value?.length) return undefined
  return works.value[previewIndex.value]
})

const {
  isPreviewPlaying,
  isPlaybackPaused,
  isHovered,
  origin,
  hasVideo,
  registerYoutubePlayer,
  registerVimeoPlayer,
  unregisterVimeoPlayer,
  playPreview,
  togglePlayback,
  stopPreview,
  rewindVideo,
  onPlayerEnded,
  onNavigate,
} = useSlideVideo(works, currentIndex)

setupKeyboardListener({
  onNavigate,
  onEscapePreview: stopPreview,
  onTogglePlayback: togglePlayback,
  isPreviewPlaying,
})

function openDesktopSlideshow(index: number) {
  if (currentIndex.value !== index) {
    onNavigate()
    goToSlide(index)
  }
  isDesktopSlideshowOpen.value = true
}

function closeDesktopSlideshow() {
  if (isPreviewPlaying.value) {
    stopPreview()
  }
  previewIndex.value = null
  hoveredIndicatorIndex.value = null
  isDesktopSlideshowOpen.value = false
}

function handleDesktopSlideshowWheel(event: WheelEvent) {
  if (!isDesktopSlideshowOpen.value) return

  const root = homeScrollRoot.value
  if (!root || event.deltaY >= 0) return

  event.preventDefault()
  root.scrollBy({ top: event.deltaY, behavior: 'auto' })
}

function syncDesktopViewWithHomeScroll() {
  const root = homeScrollRoot.value
  if (!root) return

  const viewport = root.clientHeight || 1
  if (root.scrollTop < viewport * 0.4) {
    closeDesktopSlideshow()
  }
}

function handleDesktopGridEscape(event: KeyboardEvent) {
  if (event.key !== 'Escape') return
  if (!isDesktopSlideshowOpen.value || isPreviewPlaying.value) return
  event.preventDefault()
  closeDesktopSlideshow()
}

let desktopMq: MediaQueryList | null = null
let syncDesktopLayout: (() => void) | null = null

onMounted(() => {
  desktopMq = window.matchMedia('(min-width: 768px)')
  syncDesktopLayout = () => {
    isDesktopLayout.value = desktopMq?.matches ?? false
  }
  syncDesktopLayout()
  desktopMq.addEventListener('change', syncDesktopLayout)

  window.addEventListener('keydown', handleDesktopGridEscape)
  homeScrollRoot.value?.addEventListener(
    'scroll',
    syncDesktopViewWithHomeScroll,
    {
      passive: true,
    },
  )
  syncDesktopViewWithHomeScroll()
})

onBeforeUnmount(() => {
  if (desktopMq && syncDesktopLayout) {
    desktopMq.removeEventListener('change', syncDesktopLayout)
  }
  window.removeEventListener('keydown', handleDesktopGridEscape)
  homeScrollRoot.value?.removeEventListener(
    'scroll',
    syncDesktopViewWithHomeScroll,
  )
})

watch(isPreviewPlaying, (playing) => emit('preview-playing', playing), {
  immediate: true,
})

function nextSlide() {
  navNext(onNavigate)
}

function prevSlide() {
  navPrev(onNavigate)
}

function onIndicatorClick(index: number) {
  handleIndicatorClick(index, onNavigate)
}

function handleHover(isHoveredValue: boolean) {
  if (isNavHovered.value || previewIndex.value !== null) return
  isHovered.value = isHoveredValue
}

function handleMobilePlayPreview(workIndex: number, videoIndex: number) {
  if (currentIndex.value !== workIndex) {
    onNavigate()
    goToSlide(workIndex)
  }
  playPreview(videoIndex)
}
</script>
