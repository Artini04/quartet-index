import { defineStore } from "pinia"

export const useOptionsStore = defineStore("AppStore", () => {
	const appOptions = useLocalStorage("quartet-index:app-options", {
		cardDictionary: true,
		queryLimit: 50,
	})

	return {
		appOptions,
	}
})
