// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  // CSS Globals
  css: ["~/assets/style/reset.scss", "~/assets/style/base.scss"],

  // Vite configs
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern"
        }
      }
    }
  },

  // Modules
  modules: ["@nuxt/icon", "@vueuse/nuxt", "@pinia/nuxt"]
})