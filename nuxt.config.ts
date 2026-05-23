// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-23',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://stefanosyiassemides.com',
    name: 'Stefanos Yiassemides',
  },

  app: {
    head: {
      title:
        'Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides',
      htmlAttrs: {
        class: 'antialiased bg-black text-white scrollbar-hide font-montserrat',
      },
      bodyAttrs: {
        class: 'antialiased bg-black text-white scrollbar-hide font-montserrat',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'language', content: 'en' },
        { name: 'geo.region', content: 'GB' },
        { name: 'geo.placename', content: 'United Kingdom' },
        {
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
      link: [
        { rel: 'canonical', href: 'https://stefanosyiassemides.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
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
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
  ],

  nitro: {
    preset: 'static',
  },

  image: {
    format: ['webp'],
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Source+Code+Pro': true,
      Montserrat: true,
      Lora: true,
      Inter: true,
    },
  },

  sitemap: {
    urls: [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },

  pwa: {
    registerType: 'autoUpdate',
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
    workbox: {
      navigateFallback: '/',
    },
    client: {
      installPrompt: false,
    },
    devOptions: {
      enabled: false,
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
  },
})
