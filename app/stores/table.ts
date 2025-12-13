import { defineStore } from "pinia"

type DictKey =
	| "lesson"
	| "letter"
	| "meaning-total"
	| "char-total"
	| "char-hi-total"
	| "diamond"
	| "particle"
	| "suru"
	| "type"
	| "kana-kanji"

export const useTableStore = defineStore("TableStore", () => {
	const { dict } = useAppState()
	const tableTags = ref<DictKey>("lesson")

	const tableTagsResults = computed(() => {
		return Object.groupBy<any, Word>(dict, (word) => {
			switch (tableTags.value) {
				case "lesson":
					return word.info.lesson
				case "letter":
					return word.info.letter_location
				case "diamond":
					return word.info.kanji
				case "meaning-total":
					return word.data.en_meaning.length
				case "char-total":
					const wordSan =
						word.data.ja_kana_kanji ?? word.data.ja_hiragana
					return wordSan.length
				case "char-hi-total":
					return word.data.ja_hiragana.length
				case "particle":
					return word.data.ja_particle ?? "None"
				case "suru":
					return word.data.ja_suru ?? "None"
				case "type":
					return word.data.en_verb_type ?? "None"
				case "kana-kanji":
					return word.data.ja_kana_kanji ? "Has Kana-Kanji" : "None"
				default:
					return word.info.lesson
			}
		})
	})

	watchEffect(() => {
		console.log(tableTagsResults.value)
	})

	return {
		tableTags,
		tableTagsResults,
	}
})
