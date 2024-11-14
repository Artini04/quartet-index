import Fuse from "fuse.js"
import Dictionary from "./dictionary.json"

export const useLookupStore = defineStore("lookup", () => {
  const defaultKeys = [
    "data.ja_kana_kanji",
    "data.ja_hiragana",
    "data.en_meaning"
  ]

  const search = ref<string>("")
  const keys = ref<string[]>(defaultKeys)
  const limit = useLocalStorage<number>("app.limit", 10)
  const threshold = useLocalStorage<number>("app.threshold", 0.2)

  const result = computed(() => {
    const fuseInit = new Fuse(Dictionary, {
      shouldSort: true,
      keys: keys.value,
      threshold: threshold.value,
      includeScore: true
    })

    return fuseInit.search(search.value ?? "", {
      limit: limit.value
    })
  })

  return {
    search,
    keys,
    limit,
    threshold,
    result
  }
})

export function useLookup() {
  const store = useLookupStore()
  const { search, keys, limit, threshold, result } = storeToRefs(store)

  return {
    search,
    keys,
    limit,
    threshold,
    result
  }
}
