<template>
  <div
    class="absolute max-md:fixed bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[300]"
  >
    <button
      type="button"
      aria-label="Close Video"
      class="glass-control"
      title="Close Video"
      @click="emit('close')"
    >
      <font-awesome-icon :icon="['fas', 'xmark']" class="text-sm" />
      <span>Close</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  close: []
}>()
</script>

<style scoped>
.glass-control {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  color: #fff;
  font-weight: 500;
  transition: background 0.15s ease;
}

.glass-control:hover {
  background: rgba(255, 255, 255, 0.25);
}

.glass-control:active {
  background: rgba(255, 255, 255, 0.3);
}
</style>
