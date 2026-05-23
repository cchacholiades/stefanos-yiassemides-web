<template>
  <div
    v-show="isActive"
    class="absolute inset-0"
    :class="{
      'opacity-100': isActive,
      'opacity-0': !isActive,
    }"
  >
    <NuxtImg
      v-if="backgroundWork"
      :src="`/${backgroundWork.img}`"
      class="w-full h-full object-cover blur-2xl"
      :class="{
        'opacity-100 scale-100': isActive,
        'opacity-0 scale-105': !isActive,
        'transition-all duration-500 ease-out': isNavigatingWithArrows,
        'transition-all duration-400 ease-in-out': !isNavigatingWithArrows,
        'background-fade-in': isNavigatingWithArrows && isActive,
      }"
      loading="lazy"
      :alt="backgroundWork.name"
    />

    <div
      v-if="showWatchButton"
      class="absolute inset-0 transition-opacity duration-500 video-container"
      :class="{
        'opacity-0': !isPreviewPlaying,
        'opacity-100': isPreviewPlaying,
      }"
      style="width: 100vw; height: 100vh"
      @click="emit('stop-preview')"
    >
      <SlideshowYoutubePlayer
        v-if="work.youtube && work.youtube[0]"
        :video-id="work.youtube[0]"
        :player-index="slideIndex"
        :origin="origin"
        class="youtube-player"
        @ready="(player, i) => emit('youtube-ready', player, i)"
        @ended="(i) => emit('player-ended', i)"
      />

      <SlideshowVimeoPlayer
        v-if="work.vimeo && work.vimeo[0]"
        :video-id="work.vimeo[0]"
        :player-index="slideIndex"
        class="vimeo-player"
        @ready="(player, i) => emit('vimeo-ready', player, i)"
      />
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 slide-overlay"
      :class="{
        'opacity-100': !isPreviewPlaying,
        'opacity-0': isPreviewPlaying,
      }"
      @mouseenter="emit('hover', true)"
      @mouseleave="emit('hover', false)"
      @mousemove="() => {}"
    >
      <div
        class="absolute inset-0 flex items-center justify-center transition-all duration-500"
        :class="{
          'opacity-100': previewIndex === null,
          'opacity-0': previewIndex !== null,
        }"
      >
        <div class="hidden md:flex w-full h-full items-center">
          <div class="w-24 flex items-center justify-center">
            <SlideshowNavArrow
              direction="prev"
              size="desktop"
              :visible="previewIndex === null"
              @click="emit('prev')"
              @nav-hover="emit('nav-hover', $event)"
            />
          </div>

          <div
            class="flex-1 flex justify-center items-center min-h-[50vh] px-8"
          >
            <SlideshowSlideDetails
              :work="work"
              :show-watch-button="showWatchButton"
              @play-preview="emit('play-preview')"
            />
          </div>

          <div class="w-24 flex items-center justify-center">
            <SlideshowNavArrow
              direction="next"
              size="desktop"
              :visible="previewIndex === null"
              @click="emit('next')"
              @nav-hover="emit('nav-hover', $event)"
            />
          </div>
        </div>

        <div
          class="md:hidden w-full flex justify-center items-center min-h-[50vh]"
        >
          <SlideshowSlideDetails
            :work="work"
            :show-watch-button="showWatchButton"
            compact
            @play-preview="emit('play-preview')"
          />
        </div>
      </div>

      <SlideshowSlidePreview
        :work="previewWork"
        :is-visible="previewIndex !== null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type Player from '@vimeo/player'
import type { Work } from '~/types/work'

defineProps<{
  work: Work
  slideIndex: number
  isActive: boolean
  backgroundWork: Work | undefined
  previewWork: Work | undefined
  isNavigatingWithArrows: boolean
  isPreviewPlaying: boolean
  previewIndex: number | null
  showWatchButton: boolean
  origin: string
}>()

const emit = defineEmits<{
  'play-preview': []
  'stop-preview': []
  hover: [isHovered: boolean]
  prev: []
  next: []
  'nav-hover': [isHovered: boolean]
  'youtube-ready': [player: YT.Player, index: number]
  'vimeo-ready': [player: Player, index: number]
  'player-ended': [index: number]
}>()
</script>

<style scoped>
.video-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  pointer-events: auto;
}

:deep(.youtube-player) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

:deep(.youtube-player iframe) {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

:deep(.vimeo-player) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

:deep(.vimeo-player iframe) {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

.slide-overlay {
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

@keyframes backgroundFadeIn {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.background-fade-in {
  animation: backgroundFadeIn 0.6s ease-out;
}
</style>
