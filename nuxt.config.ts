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

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
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

  // Fonts Configs
  fonts: {
    defaults: {
      weights: [400, 600],
      styles: ["normal"],
      subsets: ["latin", "japanese"]
    },
    priority: ["bunny", "google"]
  },

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
