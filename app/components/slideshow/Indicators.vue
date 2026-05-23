<template>
  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-4 z-[150] hidden md:flex"
  >
    <div
      class="flex gap-3 slide-indicators"
      @mouseenter="emit('indicators-enter')"
      @mouseleave="emit('indicators-leave')"
    >
      <div
        v-for="(work, index) in works"
        :key="work.id"
        class="relative group flex items-center"
        @mouseenter="emit('show-preview', index)"
        @mouseleave="emit('set-hovered-indicator', index)"
      >
        <button
          :class="[
            currentIndex === index
              ? 'bg-white scale-110 ring-4 ring-white/20'
              : 'bg-white/30 hover:bg-white/50',
            hoveredIndicatorIndex === index && previewIndex !== null
              ? 'scale-150 ring-4 ring-white/40'
              : '',
            'w-3 h-3 rounded-full transition-all duration-150 ease-out',
          ]"
          class="focus:outline-none backdrop-blur-sm"
          @click="emit('indicator-click', index)"
        >
          <div
            :class="[
              'absolute inset-0 rounded-full bg-white/10 transition-transform duration-150 ease-out',
              hoveredIndicatorIndex === index && previewIndex !== null
                ? 'scale-150 opacity-100'
                : 'scale-0 opacity-0',
            ]"
          ></div>
        </button>

        <div
          v-if="currentIndex === index"
          class="absolute inset-0 rounded-full ring-2 ring-white/30 indicator-pulse"
        ></div>
      </div>
    </div>
  </div>
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
.slide-indicators {
  z-index: 150 !important;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.slide-indicators button {
  position: relative;
  overflow: hidden;
  transform-origin: center;
  will-change: transform, background-color;
}

.slide-indicators button::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  opacity: 0;
  transition: opacity 0.15s ease;
}

.slide-indicators button:hover::before {
  opacity: 1;
}

@keyframes indicatorPulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.indicator-pulse {
  animation: indicatorPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
