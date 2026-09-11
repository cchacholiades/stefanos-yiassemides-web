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
      <p class="cookie-banner__text">
        We use analytics cookies to understand how visitors use this site.
      </p>
      <div class="cookie-banner__actions">
        <button type="button" class="cookie-banner__btn cookie-banner__btn--decline" @click="decline">
          Decline
        </button>
        <button type="button" class="cookie-banner__btn cookie-banner__btn--accept" @click="accept">
          Accept
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.875rem 1.25rem;
  border-radius: 9999px;
  background: rgba(13, 16, 17, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  white-space: nowrap;
}

@media (max-width: 600px) {
  .cookie-banner {
    flex-direction: column;
    border-radius: 1rem;
    white-space: normal;
    text-align: center;
    width: calc(100% - 2rem);
    bottom: 1rem;
  }
}

.cookie-banner__text {
  margin: 0;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

.cookie-banner__actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.cookie-banner__btn {
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  border: 1px solid transparent;
}

.cookie-banner__btn--decline {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.7);
}

.cookie-banner__btn--decline:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.cookie-banner__btn--accept {
  background: #fff;
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
  transform: translateX(-50%) translateY(0.75rem);
}
</style>
