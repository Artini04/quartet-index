export default defineNuxtPlugin(async (nuxtApp) => {
	nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
		console.error(error, instance, info)

		// TODO: Temporary fix for now... Will do later on spare time...
		clearError({ redirect: "/" })
	}
})