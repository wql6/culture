// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    '~/assets/styles/global.css'
  ],
  modules: [
    '@nuxt/content'
  ]
})
