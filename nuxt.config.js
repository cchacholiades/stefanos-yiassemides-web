export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stefanos-yiassemides-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue-vimeo-player'
    ],
  }
}
