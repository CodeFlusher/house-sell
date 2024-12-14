// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
      '@nuxtjs/i18n',
      'nuxt-headlessui',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  i18n: {
    lazy: true,
    locales:['en', 'ru'],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
  },

  headlessui: {
    prefix: 'Headless'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})