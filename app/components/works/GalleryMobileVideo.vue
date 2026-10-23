<template>
  <div
    v-if="work"
    class="works-gallery-mobile-video absolute inset-0 z-50 hidden max-md:block overflow-hidden"
    @click="emit('toggle-playback')"
  >
    <img
      v-if="work"
      :src="`/${work.img}`"
      class="works-gallery-mobile-video__bg"
      loading="lazy"
      :alt="work.name"
    />

    <div class="works-gallery-mobile-video__player">
      <SlideshowYoutubePlayer
        v-if="work.youtube && work.youtube[0]"
        :video-id="work.youtube[0]"
        :player-index="slideIndex"
        :origin="origin"
        :embed-options="slideshowYoutubeEmbedOptions"
        class="youtube-player"
        @ready="(player, i) => emit('youtube-ready', player, i)"
        @ended="(i) => emit('player-ended', i)"
      />

    </div>
  </div>
</template>

<script setup lang="ts">
import type { YoutubeEmbedOptions } from '~/types/youtube-embed'
import { DEFAULT_YOUTUBE_EMBED_OPTIONS } from '~/types/youtube-embed'
import type { Work } from '~/types/work'

const slideshowYoutubeEmbedOptions: YoutubeEmbedOptions =
  DEFAULT_YOUTUBE_EMBED_OPTIONS

defineProps<{
  work: Work | undefined
  slideIndex: number
  origin: string
}>()

const emit = defineEmits<{
  'toggle-playback': []
  'youtube-ready': [player: YT.Player, index: number]
  'player-ended': [index: number]
}>()
</script>

<style scoped>
.works-gallery-mobile-video {
  cursor: default;
}

.works-gallery-mobile-video__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(24px);
  transform: scale(1.05);
  opacity: 0.55;
}

.works-gallery-mobile-video__player {
  position: absolute;
  inset: 0;
  z-index: 1;
}

:deep(.youtube-player) {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none;
  z-index: 1;
}

:deep(.youtube-player iframe) {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none;
  z-index: 1;
}
</style>
