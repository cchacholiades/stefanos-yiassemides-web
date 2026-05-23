<template>
  <div class="fixed top-8 right-4 md:right-8 flex items-center gap-4 z-[300]">
    <button
      type="button"
      aria-label="Rewind Video"
      class="glass-control glass-control--icon"
      title="Rewind Video"
      @click="emit('rewind')"
    >
      <font-awesome-icon :icon="['fas', 'backward']" class="text-sm" />
    </button>

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
  rewind: []
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

.glass-control--icon {
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0;
}

.glass-control:hover {
  background: rgba(255, 255, 255, 0.1);
}

.glass-control:active {
  background: rgba(255, 255, 255, 0.15);
}
</style>
