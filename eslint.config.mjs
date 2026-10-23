import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .append({
    rules: {
      // Match Prettier: void HTML elements use self-closing tags
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  })
  .append({
    files: [
      'app/components/WorksGallery.vue',
      'app/components/slideshow/SlideDetails.vue',
    ],
    rules: {
      // Descriptions include links from static public/works.json (author-controlled)
      'vue/no-v-html': 'off',
    },
  })
