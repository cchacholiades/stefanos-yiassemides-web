<script setup lang="ts">
defineOptions({ name: 'SiteNavigation' })

const props = withDefaults(
  defineProps<{
    isPreviewPlaying?: boolean
    /** Light portrait backdrop — dark text & light social pill */
    light?: boolean
  }>(),
  { light: false },
)

const isSocialsBarHovered = ref(false)
</script>

<template>
  <div
    class="site-nav fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
    :class="[
      props.light ? 'site-nav--light' : 'site-nav--dark',
      {
        'opacity-100': !props.isPreviewPlaying,
        'opacity-0 pointer-events-none': props.isPreviewPlaying,
      },
    ]"
  >
    <div class="relative w-full mx-auto px-4 md:px-6 py-4">
      <div
        class="flex items-center"
        :class="props.light ? 'justify-end' : 'justify-between'"
      >
        <div
          v-show="!props.light"
          class="site-nav__brand flex flex-col min-w-0"
        >
          <h1 class="site-nav__title brand-name">Stefanos Yiassemides</h1>
          <p
            class="site-nav__subtitle text-sm tracking-wide mt-0.5 leading-snug"
          >
            Music Composer
            <span class="site-nav__subtitle-accent">&amp; Sound Designer</span>
          </p>
        </div>
        <div
          class="flex shrink-0 items-center gap-2 md:gap-4 nav-glass socials-container"
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
.nav-glass {
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.site-nav--dark .nav-glass {
  background: rgba(0, 0, 0, 0.2);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.site-nav--light .nav-glass {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(13, 16, 17, 0.08);
  box-shadow: 0 4px 20px rgba(13, 16, 17, 0.06);
}

.site-nav__brand .brand-name {
  font-weight: 600;
}

.site-nav__subtitle {
  font-weight: 600;
}

.site-nav--dark .site-nav__title {
  color: rgba(255, 255, 255, 0.95);
}

.site-nav--dark .site-nav__subtitle {
  color: rgba(255, 255, 255, 0.88);
}

.site-nav--light .site-nav__title,
.site-nav--light .site-nav__subtitle {
  color: #0d1011;
}

.site-nav--light .site-nav__subtitle {
  color: rgba(13, 16, 17, 0.72);
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
  border-radius: 9999px;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease;
  position: relative;
  z-index: 2;
}

.site-nav--dark .social-icon-link {
  color: #fff;
}

.site-nav--dark .social-icon-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.site-nav--dark .social-icon-link:active {
  transform: scale(0.97);
  background: rgba(255, 255, 255, 0.15);
}

.site-nav--light .social-icon-link {
  color: #0d1011;
}

.site-nav--light .social-icon-link:hover {
  background: rgba(13, 16, 17, 0.06);
  transform: scale(1.08);
}

.site-nav--light .social-icon-link:active {
  transform: scale(0.97);
  background: rgba(13, 16, 17, 0.1);
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
</style>
