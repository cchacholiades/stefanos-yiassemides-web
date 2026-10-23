<template>
  <div ref="gridEl" class="works-gallery-grid" @wheel="handleGridWheel">
    <ul class="works-gallery-grid__list" aria-label="Works">
      <li
        v-for="(work, index) in works"
        :key="work.id"
        class="works-gallery-grid__item"
      >
        <button
          type="button"
          class="works-gallery-grid__card"
          :aria-label="`Open ${work.name}`"
          @click="emit('select', index)"
        >
          <div class="works-gallery-grid__poster">
            <img
              :src="`/${work.img}`"
              class="works-gallery-grid__img"
              loading="lazy"
              :alt="work.name"
              width="160"
              height="240"
            />
            <div
              class="works-gallery-grid__poster-border"
              aria-hidden="true"
            ></div>
          </div>
          <h2 class="works-gallery-grid__title">
            {{ work.name }}
          </h2>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '~/types/work'

defineProps<{
  works: Work[]
}>()

const emit = defineEmits<{
  select: [index: number]
}>()

const gridEl = ref<HTMLElement | null>(null)
const homeScrollRoot = useHomeScrollRoot()

function handleGridWheel(event: WheelEvent) {
  const grid = gridEl.value
  const root = homeScrollRoot.value
  if (!grid || !root || event.deltaY >= 0) return

  const atTop = grid.scrollTop <= 0
  if (!atTop) return

  event.preventDefault()
  root.scrollBy({ top: event.deltaY, behavior: 'auto' })
}
</script>

<style scoped>
.works-gallery-grid {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: auto;
}

.works-gallery-grid__list {
  margin: 0;
  padding: 5.5rem 1rem 1.25rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.875rem 0.75rem;
}

@media (min-width: 1024px) {
  .works-gallery-grid__list {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem 0.875rem;
    padding-inline: 1.25rem;
  }
}

@media (min-width: 1280px) {
  .works-gallery-grid__list {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1rem 0.875rem;
    padding-inline: 1.5rem;
  }
}

@media (min-width: 1536px) {
  .works-gallery-grid__list {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
}

.works-gallery-grid__item {
  min-width: 0;
}

.works-gallery-grid__card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.works-gallery-grid__card:hover {
  transform: translateY(-2px);
}

.works-gallery-grid__card:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.85);
  outline-offset: 4px;
  border-radius: 0.5rem;
}

.works-gallery-grid__poster {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.works-gallery-grid__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.works-gallery-grid__poster-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  pointer-events: none;
}

.works-gallery-grid__title {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.02em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

@media (min-width: 1280px) {
  .works-gallery-grid__title {
    font-size: 0.875rem;
  }
}
</style>
