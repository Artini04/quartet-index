// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },
  ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },

  // CSS Globals
  css: ["~/assets/style/reset.scss", "~/assets/style/base.scss"],

  // Vite configs
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: `@use '~/assets/style/modules/root' as root; 
            @use '~/assets/style/modules/utilities' as util; 
            @use '~/assets/style/modules/theme' as theme;`
        }
      }
    }
  },

  // Modules
  modules: ["@nuxt/icon", "@vueuse/nuxt", "@pinia/nuxt"]
})
