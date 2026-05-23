<script setup lang="ts">
defineOptions({ name: 'SiteNavigation' })

defineProps<{
  isPreviewPlaying?: boolean
}>()

const isSocialsBarHovered = ref(false)
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
    :class="{
      'opacity-100': !isPreviewPlaying,
      'opacity-0': isPreviewPlaying,
    }"
  >
    <div class="relative w-full mx-auto px-4 md:px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-white flex flex-col">
          <h1
            class="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            Stefanos Yiassemides
          </h1>
          <p class="text-sm text-white/70 font-medium tracking-wide mt-0.5">
            Music Composer
          </p>
        </div>
        <div
          class="flex items-center gap-2 md:gap-4 nav-glass socials-container"
          @mouseenter="isSocialsBarHovered = true"
          @mouseleave="isSocialsBarHovered = false"
        >
          <a
            class="social-icon-link"
            href="https://soundcloud.com/stefanos-yiassemides"
            title="Stefanos Yiassemides on Soundcloud"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon :icon="['fab', 'soundcloud']" />
          </a>
          <a
            class="social-icon-link"
            href="https://www.linkedin.com/in/stefanos-yiassemides-99870579"
            title="Stefanos Yiassemides on LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
          </a>
          <a
            class="social-icon-link"
            href="https://www.instagram.com/stefyiassemidesmusic"
            title="Stefanos Yiassemides on Instagram"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon :icon="['fab', 'instagram']" />
          </a>
          <a
            class="social-icon-link"
            href="https://www.imdb.com/name/nm9390509/"
            title="Stefanos Yiassemides on IMDB"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon :icon="['fab', 'imdb']" />
          </a>
          <a
            class="social-icon-link"
            href="https://twitter.com/Stef_Yia_Music"
            title="Stefanos Yiassemides on Twitter"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Match slideshow/Indicators.vue .slide-indicators */
.nav-glass {
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.brand-panel {
  padding: 0.5rem 1rem;
}

.socials-container {
  padding: 0.4rem 0.4rem;
  align-items: center;
  z-index: 2;
}

.social-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 9999px;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease;
  position: relative;
  z-index: 2;
}

.social-icon-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: scale(1.1);
}

.social-icon-link:active {
  transform: scale(0.97);
  background: rgba(255, 255, 255, 0.15);
}

.social-icon-link :deep(svg),
.social-icon-link :deep(.fa-icon) {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767px) {
  .social-icon-link {
    width: 2.5rem;
    height: 2rem;
    font-size: 1.2rem;
    padding: 0.15rem;
  }
}

@media (min-width: 768px) {
  .social-icon-link {
    width: 4.5rem;
    height: 2.5rem;
    font-size: 2rem;
    padding: 0.25rem;
  }
}

@media (max-width: 767px) {
  .brand-panel {
    padding: 0.4rem 0.75rem;
  }

  .socials-container {
    padding: 0.25rem 0.3rem;
  }
}
</style>
