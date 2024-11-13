import Fuse from "fuse.js"
import Dictionary from "../stores/dictionary.json" with { type: "json" }

import { defineStore, storeToRefs } from "pinia"
import { ref, computed, type Ref } from "vue"
import { useLocalStorage } from "@vueuse/core"

export const useLookupStore = defineStore("lookup", () => {
  const defaultKeys = [
    "data.ja_kana_kanji",
    "data.ja_hiragana",
    "data.en_meaning",
  ]

  const search: Ref<string | null> = ref(null)
  const keys: Ref<string[]> = ref(defaultKeys)
  const limit: Ref<number> = useLocalStorage("app.limit", 10)
  const threshold: Ref<number> = useLocalStorage("app.threshold", 0.2)

  const result = computed(() => {
    const fuseInit = new Fuse(Dictionary, {
      shouldSort: true,
      keys: keys.value,
      threshold: threshold.value,
      includeScore: true,
    })

    return fuseInit.search(search.value ?? "", {
      limit: limit.value,
    })
  })

  return {
    search,
    keys,
    limit,
    threshold,
    result,
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
    result,
  }
}
