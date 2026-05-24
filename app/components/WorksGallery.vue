<template>
  <div v-if="works" class="absolute inset-0 bg-black">
    <div class="relative w-full h-full">
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

      <div
        class="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-[200] md:hidden"
      >
        <SlideshowNavArrow
          direction="prev"
          size="mobile"
          :visible="previewIndex === null"
          @click="prevSlide"
          @nav-hover="handleNavHover"
        />
        <SlideshowNavArrow
          direction="next"
          size="mobile"
          :visible="previewIndex === null"
          @click="nextSlide"
          @nav-hover="handleNavHover"
        />
      </div>

      <SlideshowPlaybackControls
        v-if="isPreviewPlaying"
        :is-paused="isPlaybackPaused"
        @rewind="rewindVideo"
        @toggle="togglePlayback"
        @close="stopPreview"
      />

      <SlideshowIndicators
        :works="works"
        :current-index="currentIndex"
        :preview-index="previewIndex"
        :hovered-indicator-index="hoveredIndicatorIndex"
        @indicator-click="onIndicatorClick"
        @show-preview="onShowPreview"
        @set-hovered-indicator="setHoveredIndicator"
        @indicators-enter="onIndicatorsEnter"
        @indicators-leave="onIndicatorsLeave"
      />
    </div>
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
  pauseCurrentVideo,
  playCurrentVideo,
  togglePlayback,
  stopPreview,
  rewindVideo,
  onPlayerEnded,
  onNavigate,
} = useSlideVideo(works, currentIndex)

const pausedForIndicatorPreview = ref(false)

setupKeyboardListener({
  onNavigate,
  onEscapePreview: stopPreview,
  onTogglePlayback: togglePlayback,
  isPreviewPlaying,
})

watch(
  isPreviewPlaying,
  (playing) => {
    emit('preview-playing', playing)
    if (!playing) pausedForIndicatorPreview.value = false
  },
  {
    immediate: true,
  },
)

function nextSlide() {
  navNext(onNavigate)
}

function prevSlide() {
  navPrev(onNavigate)
}

function onIndicatorClick(index: number) {
  handleIndicatorClick(index, onNavigate)
}

function pauseVideoForIndicatorPreview() {
  if (isPreviewPlaying.value && !isPlaybackPaused.value) {
    pauseCurrentVideo()
    pausedForIndicatorPreview.value = true
  }
}

function onShowPreview(index: number) {
  pauseVideoForIndicatorPreview()
  showPreview(index)
}

function onIndicatorsEnter() {
  pauseVideoForIndicatorPreview()
  handleIndicatorsEnter()
}

function onIndicatorsLeave() {
  handleIndicatorsLeave()
  if (pausedForIndicatorPreview.value) {
    playCurrentVideo()
    pausedForIndicatorPreview.value = false
  }
}

function handleHover(isHoveredValue: boolean) {
  if (isNavHovered.value || previewIndex.value !== null) return
  isHovered.value = isHoveredValue
}
</script>

<style scoped>
@media (hover: none) {
  .overlay-content {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  :deep(.max-w-4xl) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
