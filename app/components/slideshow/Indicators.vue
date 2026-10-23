<template>
  <nav class="slide-indicators-root" aria-label="Works slides">
    <div class="slide-indicators-bar">
      <div v-if="$slots.leading" class="slide-indicators-bar__leading">
        <slot name="leading" ></slot>
      </div>

      <div
        class="slide-indicators"
        @mouseenter="emit('indicators-enter')"
        @mouseleave="emit('indicators-leave')"
      >
        <button
          v-for="(work, index) in works"
          :key="work.id"
          type="button"
          class="indicator"
          :class="{
            'indicator--active': currentIndex === index,
            'indicator--previewing':
              hoveredIndicatorIndex === index && previewIndex !== null,
          }"
          :aria-label="`Go to ${work.name}`"
          :aria-current="currentIndex === index ? 'true' : undefined"
          @mouseenter="emit('show-preview', index)"
          @mouseleave="emit('set-hovered-indicator', index)"
          @click="emit('indicator-click', index)"
        >
          <span class="indicator__mark" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Work } from '~/types/work'

defineProps<{
  works: Work[]
  currentIndex: number
  previewIndex: number | null
  hoveredIndicatorIndex: number | null
}>()

const emit = defineEmits<{
  'indicator-click': [index: number]
  'show-preview': [index: number]
  'set-hovered-indicator': [index: number]
  'indicators-enter': []
  'indicators-leave': []
}>()
</script>

<style scoped>
.slide-indicators-root {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  z-index: 150;
  display: none;
  transform: translateX(-50%);
}

@media (min-width: 768px) {
  .slide-indicators-root {
    display: flex;
  }
}

.slide-indicators-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.slide-indicators-bar__leading {
  flex-shrink: 0;
}

.slide-indicators {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.indicator {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 2rem;
  padding: 0 0.375rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.indicator--active {
  min-width: 1.75rem;
  padding-inline: 0.3125rem;
  cursor: default;
}

.indicator:hover,
.indicator:focus-visible {
  background: rgba(255, 255, 255, 0.1);
}

.indicator:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.85);
  outline-offset: 2px;
}

.indicator--previewing:not(.indicator--active) {
  background: rgba(255, 255, 255, 0.08);
}

.indicator__mark {
  display: block;
  width: 0.4375rem;
  height: 0.4375rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.35);
  transition:
    width 0.2s ease,
    height 0.2s ease,
    background-color 0.15s ease,
    transform 0.2s ease;
  transform-origin: center;
}

.indicator:hover .indicator__mark,
.indicator--previewing .indicator__mark {
  background: rgba(255, 255, 255, 0.65);
}

.indicator--previewing .indicator__mark {
  transform: scale(1.2);
}

.indicator--active .indicator__mark {
  width: 1.25rem;
  height: 0.4375rem;
  background: #fff;
  transform: none;
}

.indicator--active:hover .indicator__mark {
  background: #fff;
}

.indicator--active.indicator--previewing .indicator__mark {
  width: 1.375rem;
  transform: none;
}
</style>
