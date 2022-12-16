export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Stefanos Yiassemides is a Music Composer and Sound Designer for Film & Media.' },

      { name: 'keywords', content: 'music composer, sound designer, film, tv, television, media, games, animation' },
      { name: 'copyright', content: 'Stefanos Yiassemides' },
      { name: 'reply-to', content: 'info@stefanosyiassemides.com' },
      { name: 'theme-color', content: '#000' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://stefanosyiassemides.com/' },
      { name: 'twitter:title', content: 'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides' },
      { name: 'twitter:description', content: 'Stefanos Yiassemides is a Music Composer and Sound Designer for Film & Media.' },
      { name: 'twitter:image', content: '/about-2.jpeg' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://stefanosyiassemides.com/' },
      { property: 'og:image', content: '/about-2.jpeg' },
      { property: 'og:description', content: 'Stefanos Yiassemides is a Music Composer and Sound Designer for Film & Media.' },
      { property: 'og:title', content: 'Stefanos Yiassemides' },
      { property: 'og:site_name', content: 'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides' },
      { property: 'fb:app_id', content: '1849135811851242' }
    ],
    htmlAttrs: {
      class: "antialiased bg-black text-white scrollbar-hide font-montserrat"
    },
    bodyAttrs: {
      class: "antialiased bg-black text-white scrollbar-hide font-montserrat"
    },
    link: [
      { rel: 'canonical', href: 'https://stefanosyiassemides.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-scroll-lock.client.js',
    '~/plugins/soundcloud.client.js',
    '~plugins/vimeo-player.client.js',
    '~plugins/youtube-player.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/google-fonts
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Sitemap
  sitemap: {
    hostname: 'https://stefanosyiassemides.com',
    gzip: true,
    routes: [
      {
        url: '/',
        changefreq: 'yearly',
        priority: 1,
        lastmod: '2022-12-15T13:00:00.000Z'
      }
    ]
  },

  gtm: {
      enabled: true,
      debug: true,
      id: "GTM-TS9GHDL",
      layer: 'dataLayer',
      variables: {},
      pageTracking: false,
      pageViewEventName: 'nuxtRoute',
      autoInit: true,
      // respectDoNotTrack: true,
      scriptId: 'gtm-script',
      scriptDefer: true,
      scriptURL: 'https://www.googletagmanager.com/gtm.js',
      crossOrigin: true,
      noscript: true,
      noscriptId: 'gtm-noscript',
      noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Google fonts module configuration: https://google-fonts.nuxtjs.org/options/
  googleFonts: {
    families: {
      'Roboto': true,
      'Source+Code+Pro': true,
      'Montserrat': true,
      'Lora': true,
      'Inter': true,
    }
  },

  fontawesome: {
    icons: {
      brands: ['faSoundcloud', 'faLinkedin', 'faTwitter', 'faInstagram', 'faImdb', 'faPlaystation', 'faSteam', 'faWindows', 'faXbox', 'faYoutube'],
      solid: ['faXmark', 'faBars']
    },
  },

  // Defaults options
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    minifyCSS: true,
    minifyJS: true,
    extractCSS: true,
    optimizeCSS: false
  },

  devServerHandlers: [],
}
