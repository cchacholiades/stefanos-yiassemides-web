export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'language', content: 'en' },
      { name: 'geo.region', content: 'GB' },
      { name: 'geo.placename', content: 'United Kingdom' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Stefanos Yiassemides is a Music Composer and Sound Designer for Film & Media.',
      },

      {
        name: 'keywords',
        content:
          'music composer, sound designer, film composer, tv composer, game composer, animation music, netflix composer, youtube music, film score, soundtrack, audio design, sound effects, music production, entertainment composer, stefanos yiassemides',
      },
      { name: 'copyright', content: 'Stefanos Yiassemides' },
      { name: 'reply-to', content: 'info@stefanosyiassemides.com' },
      { name: 'theme-color', content: '#000' },
      { name: 'author', content: 'Stefanos Yiassemides' },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'googlebot', content: 'index, follow' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://stefanosyiassemides.com/' },
      {
        name: 'twitter:title',
        content:
          'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides',
      },
      {
        name: 'twitter:description',
        content:
          'Stefanos Yiassemides is a Music Composer and Sound Designer for Film & Media.',
      },
      { name: 'twitter:image', content: '/about-2.jpeg' },
      {
        name: 'twitter:image:alt',
        content: 'Stefanos Yiassemides - Music Composer & Sound Designer',
      },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://stefanosyiassemides.com/' },
      { property: 'og:image', content: '/about-2.jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'Stefanos Yiassemides - Music Composer & Sound Designer',
      },
      {
        property: 'og:description',
        content:
          'Stefanos Yiassemides is a Music Composer and Sound Designer for Film & Media.',
      },
      { property: 'og:title', content: 'Stefanos Yiassemides' },
      {
        property: 'og:site_name',
        content:
          'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides',
      },
      { property: 'fb:app_id', content: '1849135811851242' },
    ],
    htmlAttrs: {
      class: 'antialiased bg-black text-white scrollbar-hide font-montserrat',
    },
    bodyAttrs: {
      class: 'antialiased bg-black text-white scrollbar-hide font-montserrat',
    },
    link: [
      { rel: 'canonical', href: 'https://stefanosyiassemides.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Stefanos Yiassemides',
          jobTitle: 'Music Composer & Sound Designer',
          description:
            'Award-winning Music Composer & Sound Designer for Film, TV, Games & Animation',
          url: 'https://stefanosyiassemides.com',
          sameAs: [
            'https://soundcloud.com/stefanos-yiassemides',
            'https://www.linkedin.com/in/stefanos-yiassemides-99870579',
            'https://www.instagram.com/stefyiassemidesmusic',
            'https://www.imdb.com/name/nm9390509/',
            'https://twitter.com/Stef_Yia_Music',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance Music Composer',
          },
          knowsAbout: [
            'Music Composition',
            'Sound Design',
            'Film Scoring',
            'Game Audio',
            'Animation Music',
            'Soundtrack Production',
          ],
        }),
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
    // https://image.nuxtjs.org/getting-started
    '@nuxt/image',
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
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Sitemap
  sitemap: {
    hostname: 'https://stefanosyiassemides.com',
    gzip: true,
    trailingSlash: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    ],
  },

  // Robots
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://stefanosyiassemides.com/sitemap.xml',
  },

  gtm: {
    enabled: true,
    debug: true,
    id: 'GTM-TS9GHDL',
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
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Stefanos Yiassemides - Music Composer',
      short_name: 'Stefanos Yiassemides',
      description: 'Music Composer & Sound Designer for Film & Media',
      theme_color: '#000000',
      background_color: '#000000',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  },

  // Google fonts module configuration: https://google-fonts.nuxtjs.org/options/
  googleFonts: {
    families: {
      Roboto: true,
      'Source+Code+Pro': true,
      Montserrat: true,
      Lora: true,
      Inter: true,
    },
  },

  fontawesome: {
    icons: {
      brands: [
        'faSoundcloud',
        'faLinkedin',
        'faTwitter',
        'faInstagram',
        'faImdb',
        'faPlaystation',
        'faSteam',
        'faWindows',
        'faXbox',
        'faYoutube',
      ],
      solid: [
        'faXmark',
        'faBars',
        'faChevronLeft',
        'faChevronRight',
        'faPlay',
        'faBackward',
      ],
    },
  },

  // Defaults options
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },

  // Loading configuration
  loading: {
    color: '#ffffff',
    height: '3px',
    continuous: true,
    duration: 2000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    minifyCSS: true,
    minifyJS: true,
    extractCSS: true,
    optimizeCSS: false,
  },

  // Security headers
  serverMiddleware: [
    (req, res, next) => {
      res.setHeader('X-Content-Type-Options', 'nosniff')
      res.setHeader('X-Frame-Options', 'DENY')
      res.setHeader('X-XSS-Protection', '1; mode=block')
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
      next()
    },
  ],

  devServerHandlers: [],
}
