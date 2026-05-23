<template>
  <div
    class="absolute inset-0 flex items-center justify-center transition-all duration-500 z-10 bg-black/80"
    :class="{
      'opacity-100': isVisible,
      'opacity-0 pointer-events-none': !isVisible,
    }"
  >
    <div class="w-full max-w-4xl mx-auto px-8 md:px-16">
      <div
        class="relative w-64 mx-auto transform transition-all duration-300"
        :class="{
          'scale-100': isVisible,
          'scale-95': !isVisible,
        }"
      >
        <div
          class="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl preview-poster"
        >
          <NuxtImg
            v-if="work"
            :src="`/${work.img}`"
            class="w-full h-full object-cover"
            loading="eager"
            :alt="work.name"
          />
          <div class="absolute inset-0 border border-white/10 rounded-lg"></div>
        </div>

        <div class="mt-4 text-center">
          <h3 v-if="work" class="text-xl font-bold text-white">
            {{ work.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '~/types/work'

defineProps<{
  work: Work | undefined
  isVisible: boolean
}>()
</script>

<style scoped>
.preview-poster {
  aspect-ratio: 2/3;
}

.preview-poster img {
  object-fit: cover;
  object-position: center;
}
</style>
