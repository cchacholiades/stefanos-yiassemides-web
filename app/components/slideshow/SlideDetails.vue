<template>
  <div
    class="w-full max-w-4xl mx-auto relative flex flex-col md:flex-row items-start gap-8 md:gap-12"
    :class="compact ? 'px-8 md:px-16' : ''"
  >
    <div class="w-[180px] lg:w-[260px] flex-shrink-0">
      <div
        class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl work-poster"
      >
        <img
          :src="`/${work.img}`"
          class="w-full h-full object-cover"
          loading="lazy"
          :alt="work.name"
          width="180"
          height="270"
        />
        <div class="absolute inset-0 border border-white/10 rounded-lg"></div>
      </div>
    </div>

    <div class="flex-1 space-y-4 pt-2 flex flex-col">
      <h2
        class="font-bold text-white tracking-tight pr-12 md:pr-0"
        :class="{
          'text-2xl md:text-4xl': work.name.length > TITLE_LENGTH_THRESHOLD,
          'text-3xl md:text-5xl': work.name.length <= TITLE_LENGTH_THRESHOLD,
        }"
      >
        {{ work.name }}
      </h2>

      <p
        class="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed"
        v-html="work.description"
      ></p>

      <div class="flex flex-wrap justify-start gap-2">
        <template v-if="showWatchButton && work.youtube_labels?.length">
            <button
              v-for="(label, i) in work.youtube_labels"
              :key="i"
              type="button"
              class="watch-button"
              :title="`Watch: ${label}`"
              @click="emit('play-preview', i)"
            >
              <font-awesome-icon :icon="['fas', 'play']" class="text-sm" />
              <span>{{ label }}</span>
            </button>
        </template>
        <button
          v-else-if="showWatchButton"
          type="button"
          class="watch-button"
          title="Watch Video"
          @click="emit('play-preview', 0)"
        >
          <font-awesome-icon :icon="['fas', 'play']" class="text-sm" />
          <span>Watch</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TITLE_LENGTH_THRESHOLD } from './constants'
import type { Work } from '~/types/work'

defineProps<{
  work: Work
  showWatchButton: boolean
  /** Extra horizontal padding for standalone mobile layout */
  compact?: boolean
}>()

const emit = defineEmits<{
  'play-preview': [videoIndex: number]
}>()
</script>

<style scoped>
/* Match Indicators.vue / Navigation.vue .nav-glass */
.watch-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #fff;
  font-weight: 500;
  transition: background 0.15s ease;
}

.watch-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.watch-button:active {
  background: rgba(255, 255, 255, 0.15);
}

.work-poster {
  aspect-ratio: 2/3;
}

.work-poster img {
  object-fit: cover;
  object-position: center;
}

@media (max-width: 640px) {
  h2 {
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.5;
  }
}
</style>
