// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	app: { baseURL: "/", pageTransition: { name: "page", mode: "out-in" } },
	alias: { "@styles": "./app/assets/css/" },

	// CSS Configs
	css: ["@styles/reset.scss", "@styles/global.scss", "@styles/base.scss"],

	// Font Configs
	fonts: {
		priority: ["bunny", "google"],
		defaults: {
			weights: [400, 600],
			subsets: ["latin", "latin-ext", "japanese"],
		},
	},

	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate",
		"@vueuse/nuxt",
		"@formkit/auto-animate/nuxt",
	],
})
