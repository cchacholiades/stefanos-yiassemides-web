<template>
  <article
    class="work-mobile-card"
    :class="{ 'work-mobile-card--playable': showWatchButton }"
    :aria-label="work.name"
    :role="showWatchButton ? 'button' : undefined"
    :tabindex="showWatchButton ? 0 : undefined"
    @click="showWatchButton && emit('play-preview', 0)"
    @keydown.enter.space.prevent="showWatchButton && emit('play-preview', 0)"
  >
    <div class="work-mobile-card__poster">
      <img
        :src="`/${work.img.replace('works/', 'works/thumbs/')}`"
        class="work-mobile-card__img"
        loading="lazy"
        :alt="work.name"
        width="88"
        height="132"
      />
      <div class="work-mobile-card__poster-border" aria-hidden="true" />
    </div>

    <div class="work-mobile-card__body">
      <h2 class="work-mobile-card__title">
        {{ work.name }}
      </h2>

      <p class="work-mobile-card__description" v-html="work.description" />

      <div v-if="showWatchButton" class="work-mobile-card__watch-group">
        <template v-if="work.youtube_labels?.length">
          <button
            v-for="(label, i) in work.youtube_labels"
            :key="i"
            type="button"
            class="work-mobile-card__watch"
            :title="`Watch: ${label}`"
            @click.stop="emit('play-preview', i)"
          >
            <font-awesome-icon :icon="['fas', 'play']" class="text-xs" />
            <span>{{ label }}</span>
          </button>
        </template>
        <button
          v-else
          type="button"
          class="work-mobile-card__watch"
          title="Watch Video"
          @click.stop="emit('play-preview', 0)"
        >
          <font-awesome-icon :icon="['fas', 'play']" class="text-xs" />
          <span>Watch</span>
        </button>
      </div>
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
  'play-preview': [videoIndex: number]
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

.work-mobile-card--playable {
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.work-mobile-card--playable:active {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.18);
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

.work-mobile-card__watch-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.25rem;
}

.work-mobile-card__watch {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
