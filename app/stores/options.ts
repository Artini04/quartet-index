import { defineStore } from "pinia"

export const useOptionsStore = defineStore(
	"AppStore",
	() => {
		const appOptions = useLocalStorage("quartet-index:app-options", {
			cardDictionary: true,
			meaningSpoiler: false,
			queryLimit: 30,
		})

		return {
			appOptions,
		}
	},
	{
		persist: true,
	},
)
