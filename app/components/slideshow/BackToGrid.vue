<template>
  <button
    type="button"
    class="slideshow-back-to-grid"
    aria-label="Back to works grid"
    title="All works"
    @click="emit('click')"
  >
    <font-awesome-icon :icon="['fas', 'table-cells']" class="text-lg" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>()
</script>

<style scoped>
.slideshow-back-to-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #fff;
  cursor: pointer;
  transition: background 0.15s ease;
}

.slideshow-back-to-grid:hover {
  background: rgba(255, 255, 255, 0.1);
}

.slideshow-back-to-grid:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.85);
  outline-offset: 2px;
}

.slideshow-back-to-grid:active {
  background: rgba(255, 255, 255, 0.15);
}
</style>
