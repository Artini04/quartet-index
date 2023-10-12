import { shallowRef, computed, type Ref } from 'vue'
import { useFuse, type UseFuseOptions } from '@vueuse/integrations/useFuse'
import { type Word } from '.'
import VocabularyDictionary from './dictionary.json'

// =========== //
// Look-up Tab //
// =========== //
const search_query: Ref<string> = shallowRef('')
const keys_query: Ref<string[]> = shallowRef([
  'data.ja_kana_kanji',
  'data.ja_hiragana',
  'data.en_meaning'
])
const result_limit: Ref<number> = shallowRef(25)
const result_threshold: Ref<number> = shallowRef(0.2)

// Search Options
const fuseOptions = computed<UseFuseOptions<Word>>(() => ({
  fuseOptions: {
    keys: keys_query.value,
    shouldSort: true,
    threshold: result_threshold.value,
    fieldNormWeight: 2
  },
  resultLimit: result_limit.value
}))

// Search Results
const { results } = useFuse(search_query, VocabularyDictionary, fuseOptions)

export { search_query, keys_query, result_limit, result_threshold, results }
