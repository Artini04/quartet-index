import { shallowRef, computed, type Ref, type ComputedRef } from 'vue'
import { useFuse, type UseFuseOptions } from '@vueuse/integrations/useFuse'
import VocabularyDictionary from './dictionary.json'
import { type Word } from '.'

// ========= //
// Table Tab //
// ========= //
const search_query: Ref<string> = shallowRef('')
const keys_query: Ref<string[]> = shallowRef(['info.lesson'])
const result_threshold: Ref<number> = shallowRef(0)

// Table Search Options
const fuseOptions = computed<UseFuseOptions<Word>>(() => ({
  fuseOptions: {
    keys: keys_query.value,
    threshold: result_threshold.value
  }
}))

// Table Initial Results
const { results } = useFuse(search_query, VocabularyDictionary, fuseOptions)

// Table Filtered Results
const table_results: ComputedRef<any> = computed(() => {
  return results.value.filter((item) => {
    return item.item.info.lesson === parseInt(search_query.value)
  })
})

export {
  search_query as table_search_query,
  keys_query as table_keys_query,
  result_threshold as table_results_threshold,
  table_results
}
