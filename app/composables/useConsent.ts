type ConsentStatus = 'granted' | 'denied' | null

const STORAGE_KEY = 'cookie-consent'

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
  function init() {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus
    consentStatus.value = stored
    if (stored === 'granted' || stored === 'denied') {
      updateGtag(stored)
    }
  }

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

  return { consentStatus, init, accept, decline }
}
