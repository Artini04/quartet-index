// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  sourcemap: true,
  future: {
    compatibilityVersion: 4
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: `@use "@/assets/styles/modules/utilities" as util;`
        }
      }
    }
  },

  css: ["@/assets/styles/reset.scss", "@/assets/styles/base.scss"],

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/fontaine",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@formkit/auto-animate"
  ]
})