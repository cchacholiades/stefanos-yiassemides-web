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
            <span class="block sm:inline">Stefanos</span>
            <span class="block sm:inline">Yiassemides</span>
          </h1>
          <p class="text-sm text-white/70 font-medium tracking-wide mt-0.5">
            Music Composer
          </p>
        </div>
        <div
          class="flex items-center gap-2 md:gap-4 socials-container"
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
.socials-container {
  background: rgba(255, 255, 255, 0.13);
  border-radius: 9999px;
  box-shadow:
    0 2px 24px 0 rgba(255, 255, 255, 0.13),
    0 1.5px 12px 0 rgba(120, 180, 255, 0.08);
  backdrop-filter: blur(8px) saturate(1.2);
  -webkit-backdrop-filter: blur(8px) saturate(1.2);
  padding: 0.3rem 0.5rem;
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  transition:
    background 0.22s,
    box-shadow 0.22s,
    border 0.22s;
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
    background 0.22s,
    color 0.22s,
    box-shadow 0.22s,
    transform 0.22s,
    border-radius 0.22s;
  position: relative;
  z-index: 2;
}

.social-icon-link:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  box-shadow:
    0 2px 24px 0 rgba(255, 255, 255, 0.22),
    0 1.5px 12px 0 rgba(120, 180, 255, 0.13);
  filter: brightness(1.18) drop-shadow(0 0 8px #e0e7ef);
  transform: scale(1.13);
  border-radius: 9999px;
  backdrop-filter: blur(8px) saturate(1.3);
  -webkit-backdrop-filter: blur(8px) saturate(1.3);
}

.social-icon-link:active {
  transform: scale(0.97);
  background: rgba(255, 255, 255, 0.18);
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
  .socials-container {
    background: rgba(255, 255, 255, 0.13);
    border-radius: 9999px;
    box-shadow:
      0 2px 24px 0 rgba(255, 255, 255, 0.13),
      0 1.5px 12px 0 rgba(120, 180, 255, 0.08);
    backdrop-filter: blur(8px) saturate(1.2);
    -webkit-backdrop-filter: blur(8px) saturate(1.2);
    padding: 0.3rem 0.5rem;
    border: 1.5px solid rgba(255, 255, 255, 0.18);
    transition:
      background 0.22s,
      box-shadow 0.22s,
      border 0.22s;
  }

  .social-icon-link {
    width: 4.5rem;
    height: 2.5rem;
    font-size: 2rem;
    padding: 0.25rem;
  }
}

@media (max-width: 767px) {
  .socials-container {
    background: rgba(255, 255, 255, 0.18);
    border-radius: 9999px;
    box-shadow:
      0 2px 24px 0 rgba(255, 255, 255, 0.22),
      0 1.5px 12px 0 rgba(120, 180, 255, 0.13);
    backdrop-filter: blur(8px) saturate(1.3);
    -webkit-backdrop-filter: blur(8px) saturate(1.3);
    padding: 0.25rem 0.3rem;
  }
}
</style>
