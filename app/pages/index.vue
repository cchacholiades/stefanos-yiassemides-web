<script setup lang="ts">
defineOptions({ name: 'HomePage' })

useHead({
  title: 'Music Composer for Film & Media | Stefanos Yiassemides',
})

const scrollRoot = ref<HTMLElement | null>(null)
const worksSection = ref<HTMLElement | null>(null)
const isPreviewPlaying = ref(false)

const { exitProgress, worksEnterProgress } = useLandingExitProgress(scrollRoot)

function scrollToWorks() {
  const root = scrollRoot.value
  if (!root) return

  const top = worksSection.value?.offsetTop ?? root.clientHeight
  root.scrollTo({ top, behavior: 'smooth' })
}

function scrollToLanding() {
  scrollRoot.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

const canScrollToLanding = computed(() => exitProgress.value > 0.02)

useHomeScrollProvide(scrollRoot, scrollToLanding)

const worksGalleryDesktopView = ref<'grid' | 'slideshow' | null>(null)

const showGridNavScrim = computed(
  () => exitProgress.value >= 0.85 && worksGalleryDesktopView.value === 'grid',
)

const worksSectionStyle = computed(() => ({
  opacity: 0.15 + worksEnterProgress.value * 0.85,
}))
</script>

<template>
  <div
    ref="scrollRoot"
    class="home h-[100dvh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-black"
  >
    <Navigation
      :is-preview-playing="isPreviewPlaying"
      :light="exitProgress < 0.85"
      :can-scroll-to-landing="canScrollToLanding"
      :show-grid-nav-scrim="showGridNavScrim"
      @scroll-to-landing="scrollToLanding"
    />

    <HomeLanding
      :exit-progress="exitProgress"
      @scroll-to-works="scrollToWorks"
    />

    <section
      id="works"
      ref="worksSection"
      class="home__works relative min-h-[100dvh] h-[100dvh] max-md:h-auto shrink-0 snap-start snap-always"
      aria-label="Works gallery"
      :style="worksSectionStyle"
    >
      <WorksGallery
        @preview-playing="isPreviewPlaying = $event"
        @desktop-view-change="worksGalleryDesktopView = $event"
      />
    </section>

    <HomeAbout />
  </div>
</template>

<style scoped>
.home__works {
  isolation: isolate;
}
</style>
