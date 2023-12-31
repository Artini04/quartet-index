import { defineStore } from 'pinia'
import { ref, computed, type Ref } from 'vue'
import Fuse from 'fuse.js'
import Dictionary from './dictionary.json'

// TODO: COMBINE SEARCH AND TABLE QUERYING

export const useSearchStore = defineStore('search', () => {
  // =========== //
  // Look-up Tab //
  // =========== //

  const search_query: Ref<string> = ref('')
  const keys_query: Ref<string[]> = ref(['data.ja_kana_kanji', 'data.ja_hiragana', 'data.en_meaning'])
  const limit: Ref<number> = ref(25)
  const threshold: Ref<number> = ref(0.2)

  const fuse = computed(() => {
    const fuse_init = new Fuse(Dictionary, {
      shouldSort: true,
      keys: keys_query.value,
      threshold: threshold.value,
      includeScore: true,
    })

    const results = fuse_init.search(search_query.value, {
      limit: limit.value,
    })

    return { fuse_init, results }
  })

  return { search_query, keys_query, limit, threshold, fuse }
})

export const useTableSearchStore = defineStore('table-search', () => {
  // ========= //
  // Table Tab //
  // ========= //

  const search_query: Ref<string> = ref('')
  const keys_query: Ref<string[]> = ref(['info.lesson'])
  const threshold: Ref<number> = ref(0)

  const fuse = computed(() => {
    const fuse_init = new Fuse(Dictionary, {
      shouldSort: true,
      keys: keys_query.value,
      threshold: threshold.value,
      location: 0,
    })

    const results = fuse_init.search(search_query.value)

    return { fuse_init, results }
  })

  // TODO: Optimize
  const table_results = computed(() => {
    return fuse.value.results.filter((item) => {
      return item.item.info.lesson === parseInt(search_query.value)
    })
  })

  return { search_query, keys_query, threshold, fuse, table_results }
})
