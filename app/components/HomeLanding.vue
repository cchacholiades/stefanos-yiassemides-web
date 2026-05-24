<template>
  <section
    class="landing relative z-10 flex h-[100dvh] min-h-[100dvh] shrink-0 flex-col items-center justify-center bg-black px-6 snap-start snap-always"
    aria-label="Introduction"
  >
    <div
      class="landing__content flex max-w-2xl flex-col items-center text-center"
    >
      <p class="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
        Stefanos Yiassemides
      </p>
      <h2
        class="mt-4 font-bold tracking-tight text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl"
      >
        Music Composer &amp; Sound Designer
      </h2>
      <p class="mt-3 text-lg text-white/70 md:text-xl">for Film &amp; Media</p>

      <button
        type="button"
        class="landing__cta relative z-10 mt-10"
        @click="emit('scroll-to-works')"
      >
        <span>View works</span>
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="text-sm"
          aria-hidden="true"
        />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  'scroll-to-works': []
}>()
</script>

<style scoped>
.landing__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.25rem;
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

.landing__cta:hover {
  background: rgba(255, 255, 255, 0.1);
}

.landing__cta:active {
  background: rgba(255, 255, 255, 0.15);
}
</style>
