// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  future: {
    compatibilityVersion: 4
  },

  // Application Configs
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },

  // Vite Configs
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

  // Style Sheet Configs
  css: ["@/assets/styles/reset.scss", "@/assets/styles/base.scss"],
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {}
    }
  },

  // Modules
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/fontaine",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@formkit/auto-animate"
  ]
})
