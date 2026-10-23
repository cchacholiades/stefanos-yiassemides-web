<template>
  <div
    class="works-gallery-mobile hidden w-full max-md:flex flex-col pt-[4.75rem] pb-[env(safe-area-inset-bottom,0)]"
  >
    <ol class="works-gallery-mobile__list" aria-label="Works">
      <li
        v-for="(work, index) in works"
        :key="work.id"
        class="works-gallery-mobile__item"
      >
        <WorksMobileCard
          :work="work"
          :show-watch-button="hasVideo(work)"
          @play-preview="
            (videoIndex) => emit('play-preview', index, videoIndex)
          "
        />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '~/types/work'

defineProps<{
  works: Work[]
  hasVideo: (work: Work) => boolean
}>()

const emit = defineEmits<{
  'play-preview': [workIndex: number, videoIndex: number]
}>()
</script>

<style scoped>
.works-gallery-mobile__list {
  margin: 0;
  padding: 0.75rem 1rem 1.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.works-gallery-mobile__item {
  flex-shrink: 0;
}
</style>
