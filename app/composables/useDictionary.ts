import Fuse from "fuse.js"
import Dictionary from "./dictionary.json"

export const useLookupStore = defineStore("lookup", () => {
  const defaultKeys = [
    "data.ja_kana_kanji",
    "data.ja_hiragana",
    "data.en_meaning"
  ]

  const appDictionary = useLocalStorage("app.dictionary", {
    keys: defaultKeys,
    limit: 10,
    threshold: 0.2,
    includeScore: true
  })

  const search = ref<string>("")
  const keys = ref<string[]>(defaultKeys)
  const limit = useLocalStorage<number>("app.limit", 10)
  const threshold = useLocalStorage<number>("app.threshold", 0.2)
  const dictionary = dictionaryInit()
  const result = computed(() => {
    return dictionary.search(search.value, {
      limit: appDictionary.value.limit
    })
  })

  function dictionaryInit() {
    return new Fuse(Dictionary, {
      shouldSort: true,
      keys: appDictionary.value.keys,
      threshold: appDictionary.value.threshold,
      includeScore: appDictionary.value.includeScore
    })
  }

  return {
    appDictionary,
    search,
    keys,
    limit,
    threshold,
    result
  }
})

export function useLookup() {
  const { appDictionary, search, keys, limit, threshold, result } = storeToRefs(
    useLookupStore()
  )

  return {
    appDictionary,
    search,
    keys,
    limit,
    threshold,
    result
  }
}
