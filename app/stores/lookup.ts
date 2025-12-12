import Fuse from "fuse.js"
import Dictionary from "~/data/dictionary.json"
import { defineStore } from "pinia"

export const useLookupStore = defineStore("LookupStore", () => {
	const gridAnnouncement = ref(true)
	const defaultKeys = [
		"data.ja_kana_kanji",
		"data.ja_hiragana",
		"data.en_meaning",
	]

	const searchOptions = useLocalStorage("quartet-index:search-options", {
		keys: defaultKeys,
		search: "",
		threshold: 0.2,
		limit: 10,
		includeScore: true,
	})

	const dictionary = computed(() => {
		console.log("Dictionary has changed!")
		return new Fuse(Dictionary, {
			shouldSort: true,
			keys: searchOptions.value.keys,
			threshold: searchOptions.value.threshold,
			includeScore: searchOptions.value.includeScore,
		})
	})

	const result = computed(() => {
		console.log("Results have changed!")
		return dictionary.value.search(searchOptions.value.search, {
			limit: searchOptions.value.limit,
		})
	})

	return {
		gridAnnouncement,
		searchOptions,
		dictionary,
		result,
	}
})
