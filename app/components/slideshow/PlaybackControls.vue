<template>
  <div
    class="absolute max-md:fixed bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[300]"
  >
    <button
      type="button"
      aria-label="Close Video"
      class="close-btn"
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
.close-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 9999px;
  background: #0d1011;
  color: #fff;
  font-weight: 500;
  transition: background 0.15s ease;
}

.close-btn:hover {
  background: #333333;
}

.close-btn:active {
  background: #444444;
}
</style>
