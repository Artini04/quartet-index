// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },

  // Aliases
  alias: {
    "@components": "@/components/",
    "@layouts": "@/layouts/"
  },

  // Vite Configs
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern"
        }
      }
    }
  },

  // Style Configs
  css: ["@/assets/styles/reset.scss", "@/assets/styles/base.scss"],

  // Modules
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/fontaine",
    "@formkit/auto-animate/nuxt"
  ]
})
