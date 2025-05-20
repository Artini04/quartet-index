// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    future: { compatibilityVersion: 4 },
    app: { baseURL: "/", pageTransition: { name: "page", mode: "out-in" } },

    // Aliases
    alias: {
        "@styles": "./assets/css",
        "@components": "./components/",
        "@layouts": "./layouts/",
    },

    // Style Configs
    css: ["@styles/reset.scss", "@styles/global.scss", "@styles/base.scss"],
    // css: [
    //     "@/assets/styles/reset.scss",
    //     "@styles/global.scss",
    //     "@/assets/styles/base.scss",
    // ],

    // Fonts Configs
    fonts: {
        priority: ["bunny", "google"],
        defaults: {
            weights: [400, 600],
            styles: ["normal"],
            subsets: ["latin", "japanese"],
        },
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
        "@formkit/auto-animate/nuxt",
    ],
})
