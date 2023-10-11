// TODO: WORK IN PROGRESS

import Fuse from 'fuse.js'
import { shallowRef, ref, computed, type Ref, type ComputedRef } from 'vue'
import { useFuse, type UseFuseOptions } from '@vueuse/integrations/useFuse'
import vocabDict from './dictionary.json'

interface Word {
  id: number
  data: {
    ja_kana_kanji?: string | null
    ja_furigana: string
    ja_particle?: string | null
    ja_suru?: string | null
    en_meaning: string[]
    en_verb_type?: string | null
  }
  info: {
    ja_letter_loc: string
    lesson: number
    reading: number
    kanji: string
  }
}

const searchQuery: Ref<string> = shallowRef('')
const resultLimit: Ref<number> = shallowRef(25)
const resultsThreshold: Ref<number> = shallowRef(0.2)

const keys: ComputedRef<string[][]> = computed(() => {
  const keyList: string[][] = []

  keyList.push(['data', 'ja_kana_kanji'])
  keyList.push(['data', 'ja_furigana'])
  keyList.push(['data', 'en_meaning'])

  return keyList
})

const fuseOptions = computed<UseFuseOptions<Word>>(() => ({
  fuseOptions: {
    keys: keys.value,
    shouldSort: true,
    threshold: resultsThreshold.value
  },
  resultLimit: resultLimit.value
}))

const { results } = useFuse(searchQuery, vocabDict, fuseOptions)

const searchIndex = (searchKeyword: string) => {
  searchQuery.value = searchKeyword
}

const fusedLessonDict = new Fuse(vocabDict, {
  keys: [['info', 'lesson']]
})

const resultsTable: Ref<any[]> = ref([])

// Get the lesson and reading words in the vocabulary index
function fetchFromDictAsTable(lesson: number): void {
  resultsTable.value = []
  if (lesson === 0) return

  const value = fusedLessonDict.search(lesson.toString())

  value.forEach((item) => {
    const item_lesson: number = item['item']['info']['lesson']
    if (item_lesson != lesson) return
    resultsTable.value.push(item)
  })
}

export {
  fetchFromDictAsTable,
  searchIndex,
  searchQuery,
  resultLimit,
  results,
  resultsTable,
  type Word
}
