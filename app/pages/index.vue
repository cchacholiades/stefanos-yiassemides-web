<script setup lang="ts">
defineOptions({ name: 'HomePage' })

useHead({
  title:
    'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides',
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Stefanos Yiassemides',
        alternateName: 'Stefanos Yiassemides',
        description: 'Music Composer & Sound Designer for Film & Media',
        url: 'https://stefanosyiassemides.com',
        sameAs: [
          'https://soundcloud.com/stefanos-yiassemides',
          'https://www.linkedin.com/in/stefanos-yiassemides-99870579',
          'https://www.instagram.com/stefyiassemidesmusic',
          'https://www.imdb.com/name/nm9390509/',
          'https://twitter.com/Stef_Yia_Music',
        ],
      }),
    },
  ],
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
      <WorksGallery @preview-playing="isPreviewPlaying = $event" />
    </section>
  </div>
</template>

<style scoped>
.home__works {
  isolation: isolate;
}
</style>
