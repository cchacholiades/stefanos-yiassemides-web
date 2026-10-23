const GTM_ID = 'GTM-TS9GHDL'

// gtag() wraps arguments in an Arguments object so GTM processes consent commands correctly.
// dataLayer.push('consent', ...) pushes plain strings which GTM ignores for consent signalling.
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer?.push(arguments as unknown as Record<string, unknown>)
}

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return

  window.dataLayer = window.dataLayer || []

  // Consent Mode v2 — default denied; restore prior decision immediately if available
  const storedConsent = localStorage.getItem('cookie-consent') as 'granted' | 'denied' | null
  gtag('consent', 'default', {
    analytics_storage: storedConsent ?? 'denied',
    ad_storage: storedConsent ?? 'denied',
    functionality_storage: storedConsent ?? 'denied',
    personalization_storage: storedConsent ?? 'denied',
    security_storage: 'granted',
    ...(!storedConsent && { wait_for_update: 500 }),
  })

  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
  })

  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.defer = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  script.crossOrigin = 'anonymous'
  document.head.appendChild(script)

  const noscript = document.createElement('noscript')
  noscript.id = 'gtm-noscript'
  const iframe = document.createElement('iframe')
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'
  noscript.appendChild(iframe)
  document.body.prepend(noscript)

  const router = useRouter()
  router.afterEach((to) => {
    window.dataLayer?.push({
      event: 'nuxtRoute',
      pageType: 'PageView',
      pageUrl: to.fullPath,
      routeName: to.name,
    })
  })
})

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}
