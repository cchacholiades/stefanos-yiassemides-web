<template>
  <button
    :aria-label="direction === 'prev' ? 'Previous Slide' : 'Next Slide'"
    class="text-white/90 hover:text-white transition-all duration-500 nav-arrow group"
    :class="[
      direction === 'prev' ? 'nav-arrow-left' : 'nav-arrow-right',
      size === 'desktop' ? 'text-6xl' : 'text-3xl',
      visible ? 'opacity-100' : 'opacity-0',
    ]"
    @click="emit('click')"
    @mouseenter="emit('nav-hover', true)"
    @mouseleave="emit('nav-hover', false)"
  >
    <div
      class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      :class="{
        'transform -scale-100': direction === 'prev' && size === 'desktop',
      }"
    ></div>
    <div class="relative flex items-center justify-center w-full h-full">
      <font-awesome-icon :icon="['fas', chevronIcon]" />
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  direction: 'prev' | 'next'
  size: 'desktop' | 'mobile'
  visible: boolean
}>()

const emit = defineEmits<{
  click: []
  'nav-hover': [isHovered: boolean]
}>()

const chevronIcon = computed(() =>
  props.direction === 'prev' ? 'chevron-left' : 'chevron-right',
)
</script>

<style scoped>
.nav-arrow {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 50%;
  will-change: transform, opacity;
  position: relative;
}

.nav-arrow:hover {
  transform: scale(1.1);
}

.nav-arrow .absolute {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.nav-arrow :deep(.fa-icon),
.nav-arrow :deep(svg) {
  font-size: 1.7rem !important;
  width: 1.7rem !important;
  height: 1.7rem !important;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  position: relative;
  z-index: 1;
  will-change: transform;
}

@media (max-width: 767px) {
  .nav-arrow {
    width: 40px;
    height: 40px;
  }

  .nav-arrow :deep(.fa-icon),
  .nav-arrow :deep(svg) {
    font-size: 1rem !important;
    width: 1rem !important;
    height: 1rem !important;
  }

  .nav-arrow .absolute {
    opacity: 0;
  }

  .nav-arrow:hover {
    transform: none;
  }

  .nav-arrow:hover .absolute {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .nav-arrow {
    width: 64px;
    height: 64px;
  }

  .nav-arrow :deep(.fa-icon),
  .nav-arrow :deep(svg) {
    font-size: 1.7rem !important;
    width: 1.7rem !important;
    height: 1.7rem !important;
  }
}
</style>
