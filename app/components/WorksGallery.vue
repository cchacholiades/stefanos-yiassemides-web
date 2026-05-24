<template>
  <div
    v-if="works"
    class="absolute inset-0 bg-black max-md:relative max-md:inset-auto max-md:min-h-[100dvh]"
  >
    <!-- Desktop slideshow (disabled below md / 768px) -->
    <div class="relative hidden h-full w-full md:block">
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
        @play-preview="playPreview"
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
      />
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
      v-if="isPreviewPlaying"
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
}>()

const { works } = useSlideshowWorks()

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

function handleMobilePlayPreview(index: number) {
  if (currentIndex.value !== index) {
    onNavigate()
    goToSlide(index)
  }
  playPreview()
}
</script>
