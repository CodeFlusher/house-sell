// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/i18n', 'nuxt-headlessui', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['./index.css'],
  i18n: {
    // lazy: true,
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        file: 'en-US.json'
      },
      {
        code: 'ru',
        file: 'ru-RU.json'
      }
    ]
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