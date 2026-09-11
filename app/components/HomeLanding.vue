<template>
  <section
    class="landing relative z-10 h-[100dvh] min-h-[100dvh] shrink-0 overflow-hidden snap-start snap-always"
    :class="{ 'landing--exiting': progress > 0 }"
    aria-label="Introduction"
  >
    <div class="landing__media absolute inset-0" :style="mediaStyle">
      <NuxtImg
        src="/about.png"
        alt="Stefanos Yiassemides"
        class="landing__photo"
        width="1200"
        height="1600"
        format="webp"
        quality="85"
        fetchpriority="high"
        loading="eager"
      />
    </div>

    <div
      class="landing__inner relative z-10 flex h-full w-full flex-col justify-end px-6 pb-14 pt-28 md:px-12 md:pb-20 lg:px-16"
      :style="contentStyle"
    >
      <div class="landing__copy w-full max-w-xl">
        <p class="landing__eyebrow brand-name">Stefanos Yiassemides</p>
        <h1 class="landing__headline">
          Music Composer
          <span class="landing__headline-accent">&amp; Sound Designer</span>
        </h1>
        <p class="landing__tagline">for Film &amp; Media</p>

        <button
          type="button"
          class="landing__cta mt-8"
          @click="emit('scroll-to-works')"
        >
          View works
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    exitProgress?: number
  }>(),
  { exitProgress: 0 },
)

const emit = defineEmits<{
  'scroll-to-works': []
}>()

const prefersReducedMotion = ref(false)

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
})

const progress = computed(() =>
  prefersReducedMotion.value ? 0 : props.exitProgress,
)

const mediaStyle = computed(() => {
  const p = progress.value
  if (p <= 0) return {}
  return {
    transform: `translate3d(0, ${-p * 6}%, 0) scale(${1 + p * 0.03})`,
    opacity: 1 - p * 0.95,
  }
})

const contentStyle = computed(() => {
  const p = progress.value
  if (p <= 0) return {}
  return {
    opacity: Math.max(0, 1 - p * 2),
    transform: `translate3d(0, ${-p * 16}px, 0)`,
  }
})
</script>

<style scoped>
.landing {
  --landing-ink: #0d1011;
  --landing-ink-muted: rgba(13, 16, 17, 0.58);
}

.landing__media {
  /* Matches the portrait’s warm grey/beige backdrop */
  background: #e4e2de;
}

.landing__photo {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
  object-fit: cover;
  /* Source 1672×941 — subject sits ~right 40%; anchor on face, not frame center */
  object-position: 75% 38%;
}

.landing__eyebrow {
  color: var(--landing-ink-muted);
}

.landing__headline {
  margin-top: 0.75rem;
  font-size: clamp(2rem, 5vw, 3.35rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--landing-ink);
}

.landing__headline-accent {
  display: block;
  margin-top: 0.12em;
  color: rgba(13, 16, 17, 0.78);
}

.landing__tagline {
  margin-top: 0.75rem;
  font-size: 1.125rem;
  color: rgba(13, 16, 17, 0.68);
}

.landing__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(13, 16, 17, 0.12);
  border-radius: 9999px;
  background: var(--landing-ink);
  color: #fff;
  font-weight: 500;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.landing__cta:hover {
  background: #1a1f21;
}

.landing__cta:active {
  transform: scale(0.98);
}

.landing__media {
  will-change: transform, opacity;
}

.landing__inner {
  will-change: opacity, transform;
}

@media (min-width: 768px) {
  .landing__tagline {
    font-size: 1.25rem;
  }
}

@media (min-width: 1241px) {
  .landing__photo {
    object-position: 78% 36%;
  }
}

@media (min-width: 768px) and (max-width: 1240px) {
  .landing__photo {
    object-position: 74% 30%;
  }
}

/* Copy sits over the dark shirt — light type (1240px+ uses dark ink) */
@media (max-width: 1239px) {
  .landing__copy {
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.45);
  }

  .landing__eyebrow {
    color: rgba(255, 255, 255, 0.65);
  }

  .landing__headline {
    color: #fff;
  }

  .landing__headline-accent {
    color: rgba(255, 255, 255, 0.92);
  }

  .landing__tagline {
    color: rgba(255, 255, 255, 0.8);
  }

  .landing__cta {
    background: rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .landing__cta:hover {
    background: rgba(255, 255, 255, 0.12);
  }
}

@media (max-width: 767px) {
  .landing__photo {
    object-position: 81% 38%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .landing__media,
  .landing__inner {
    will-change: auto;
  }
}
</style>
