const GTM_ID = 'GTM-TS9GHDL'

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return

  // Google Consent Mode v2 — default all to denied before GTM loads
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500,
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
