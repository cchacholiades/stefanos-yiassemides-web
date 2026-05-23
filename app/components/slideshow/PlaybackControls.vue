<template>
  <div class="fixed top-8 right-4 md:right-8 flex items-center gap-4 z-[300]">
    <button
      aria-label="Rewind Video"
      class="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
      title="Rewind Video"
      @click="emit('rewind')"
    >
      <div class="flex items-center justify-center transition-all duration-300">
        <font-awesome-icon :icon="['fas', 'backward']" class="text-sm" />
      </div>
    </button>

    <button
      aria-label="Close Video"
      class="flex items-center gap-3 px-4 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
      title="Close Video"
      @click="emit('close')"
    >
      <div class="flex items-center justify-center transition-all duration-300">
        <font-awesome-icon :icon="['fas', 'xmark']" class="text-sm" />
      </div>
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
