<script setup lang="ts">
const { consentStatus, init, accept, decline } = useConsent()

onMounted(() => {
  init()
})
</script>

<template>
  <Transition name="banner">
    <div
      v-if="consentStatus === null"
      class="cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div class="cookie-banner__inner">
        <p class="cookie-banner__text">
          Analytics help understand how visitors find and explore this portfolio.
        </p>
        <div class="cookie-banner__actions">
          <button
            type="button"
            class="cookie-banner__btn cookie-banner__btn--decline"
            @click="decline"
          >
            Decline
          </button>
          <button
            type="button"
            class="cookie-banner__btn cookie-banner__btn--accept"
            @click="accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.3);
}

.cookie-banner__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

@media (max-width: 640px) {
  .cookie-banner__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.875rem;
    padding: 1rem;
  }
}

.cookie-banner__text {
  margin: 0;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.5;
}

.cookie-banner__actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

/* Matches HomeLanding .landing__cta */
.cookie-banner__btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.125rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
  border: 1px solid transparent;
}

.cookie-banner__btn:active {
  transform: scale(0.98);
}

/* Ghost — matches mobile landing CTA */
.cookie-banner__btn--decline {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.72);
}

.cookie-banner__btn--decline:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* Filled — matches desktop landing CTA */
.cookie-banner__btn--accept {
  background: #fff;
  border-color: rgba(255, 255, 255, 0.12);
  color: #0d1011;
}

.cookie-banner__btn--accept:hover {
  background: rgba(255, 255, 255, 0.88);
}

.banner-enter-active,
.banner-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.banner-enter-from,
.banner-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
