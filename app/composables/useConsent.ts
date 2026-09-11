type ConsentStatus = 'granted' | 'denied' | null

const STORAGE_KEY = 'cookie-consent'

// Start null on both server and client so SSR and initial hydration match.
// Actual value is read from localStorage after mount.
const consentStatus = ref<ConsentStatus>(null)

function updateGtag(status: 'granted' | 'denied') {
  window.dataLayer?.push({
    event: 'consent_update',
  })
  window.dataLayer?.push('consent', 'update', {
    analytics_storage: status,
    ad_storage: status,
    functionality_storage: status,
    personalization_storage: status,
    security_storage: 'granted',
  })
}

export function useConsent() {
  onMounted(() => {
    consentStatus.value = localStorage.getItem(STORAGE_KEY) as ConsentStatus
  })

  function accept() {
    consentStatus.value = 'granted'
    localStorage.setItem(STORAGE_KEY, 'granted')
    updateGtag('granted')
  }

  function decline() {
    consentStatus.value = 'denied'
    localStorage.setItem(STORAGE_KEY, 'denied')
    updateGtag('denied')
  }

  return { consentStatus, accept, decline }
}
