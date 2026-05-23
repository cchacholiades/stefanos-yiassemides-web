<template>
  <div
    class="w-full max-w-4xl mx-auto relative flex flex-col md:flex-row items-start gap-8 md:gap-12"
    :class="compact ? 'px-8 md:px-16' : ''"
  >
    <div class="w-[180px] flex-shrink-0">
      <div
        class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl work-poster"
      >
        <NuxtImg
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

    <div class="flex-1 space-y-8 pt-2 h-[270px] flex flex-col">
      <div class="flex-1 flex flex-col">
        <h2
          class="font-bold text-white mb-4 tracking-tight pr-12 md:pr-0"
          :class="{
            'text-2xl md:text-4xl': work.name.length > TITLE_LENGTH_THRESHOLD,
            'text-3xl md:text-5xl': work.name.length <= TITLE_LENGTH_THRESHOLD,
          }"
        >
          {{ work.name }}
        </h2>
        <div class="overflow-y-auto pr-4 space-y-8">
          <p
            class="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed"
            v-html="work.description"
          ></p>

          <div v-if="work.platforms" class="flex gap-6 items-center">
            <div
              v-for="platform in work.platforms"
              :key="platform"
              class="text-xl md:text-2xl text-white/90 hover:text-white transition-colors"
            >
              <font-awesome-icon
                v-if="platform !== 'netflix'"
                :icon="['fab', platform]"
              />
              <img
                v-else
                src="/icons/netflix.svg"
                alt="Netflix"
                class="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-start">
          <button
            v-if="showWatchButton"
            class="flex items-center gap-3 px-4 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20 group"
            title="Watch Video"
            @click="emit('play-preview')"
          >
            <div
              class="flex items-center justify-center transition-all duration-300"
            >
              <font-awesome-icon :icon="['fas', 'play']" class="text-sm" />
            </div>
            <span>Watch</span>
          </button>
        </div>
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
  'play-preview': []
}>()
</script>

<style scoped>
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
