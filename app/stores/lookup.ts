import Fuse from "fuse.js"
import { defineStore } from "pinia"
import Dictionary from "@/data/dictionary.json"

export const useLookupStore = defineStore(
    "Lookup",
    () => {
        const defaultKeys = [
            "data.ja_kana_kanji",
            "data.ja_hiragana",
            "data.en_meaning",
        ]

        const search = ref<string>("")
        const lookupOptions = useLocalStorage("lookup.options", {
            keys: defaultKeys,
            limit: 25,
            threshold: 0.2,
            includeScore: true,
        })
        const dictionary = dictionaryInit()
        const result = computed(() => {
            return dictionary.search(search.value, {
                limit: lookupOptions.value.limit,
            })
        })

        function dictionaryInit() {
            return new Fuse(Dictionary, {
                shouldSort: true,
                keys: lookupOptions.value.keys,
                threshold: lookupOptions.value.threshold,
                includeScore: lookupOptions.value.includeScore,
            })
        }

        return {
            search,
            lookupOptions,
            result,
        }
    },
    { persist: true },
)
