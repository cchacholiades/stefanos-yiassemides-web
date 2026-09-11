<template>
  <article class="work-mobile-card" :aria-label="work.name">
    <div class="work-mobile-card__poster">
      <img
        :src="`/${work.img}`"
        class="work-mobile-card__img"
        loading="lazy"
        :alt="work.name"
        width="72"
        height="108"
      />
      <div class="work-mobile-card__poster-border" aria-hidden="true" />
    </div>

    <div class="work-mobile-card__body">
      <ul
        v-if="work.platforms?.length"
        class="work-mobile-card__platforms"
        aria-label="Platforms"
      >
        <li
          v-for="platform in work.platforms"
          :key="platform"
          class="work-mobile-card__platform"
        >
          <font-awesome-icon
            v-if="platform !== 'netflix'"
            :icon="['fab', platform]"
          />
          <img
            v-else
            src="/icons/netflix.svg"
            alt="Netflix"
            class="work-mobile-card__netflix"
          />
        </li>
      </ul>

      <h2 class="work-mobile-card__title">
        {{ work.name }}
      </h2>

      <p class="work-mobile-card__description" v-html="work.description" />

      <button
        v-if="showWatchButton"
        type="button"
        class="work-mobile-card__watch"
        title="Watch Video"
        @click="emit('play-preview')"
      >
        <font-awesome-icon :icon="['fas', 'play']" class="text-xs" />
        <span>Watch</span>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Work } from '~/types/work'

defineProps<{
  work: Work
  showWatchButton: boolean
}>()

const emit = defineEmits<{
  'play-preview': []
}>()
</script>

<style scoped>
.work-mobile-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.work-mobile-card__poster {
  position: relative;
  flex-shrink: 0;
  width: 5.5rem;
  aspect-ratio: 2 / 3;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}

.work-mobile-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.work-mobile-card__poster-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  pointer-events: none;
}

.work-mobile-card__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.work-mobile-card__platforms {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.75rem;
  line-height: 1;
}

.work-mobile-card__platform {
  color: rgba(255, 255, 255, 0.7);
}

.work-mobile-card__platform :deep(svg),
.work-mobile-card__platform :deep(.fa-icon) {
  width: 0.75rem;
  height: 0.75rem;
}

.work-mobile-card__netflix {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
}

.work-mobile-card__title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  letter-spacing: -0.02em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.work-mobile-card__description {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.82);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.work-mobile-card__description :deep(p) {
  margin: 0;
}

.work-mobile-card__watch {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: background 0.15s ease;
}

.work-mobile-card__watch:active {
  background: rgba(255, 255, 255, 0.15);
}
</style>
