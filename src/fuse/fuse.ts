import { ref, type Ref } from 'vue'
import Fuse from 'fuse.js'
import vocabDictJSON from './words_list.json'

const fusedCommonDict = new Fuse(vocabDictJSON, {
  keys: ['ja-kk', 'ja-h', 'en'],
  shouldSort: true,
  threshold: 0.2
})

const fusedLessonDict = new Fuse(vocabDictJSON, {
  keys: ['lesson']
})

const results: Ref<any[]> = ref([]),
  resultsTable: Ref<any[]> = ref([])

// Get the word in the vocabulary index
function fetchFromDict(keyword: string): void {
  if (keyword.length === 0) {
    alert('Search input empty!')
    return
  }

  results.value = []
  const value = fusedCommonDict.search(keyword)

  value.forEach((item) => {
    results.value.push(item)
  })
}

// Get the lesson and reading words in the vocabulary index
function fetchFromDictAsTable(keyword: string): void {
  if (keyword === '0') return

  resultsTable.value = []
  const value = fusedLessonDict.search(keyword)

  value.forEach((item) => {
    if (item['item']['lesson'] !== keyword) return
    resultsTable.value.push(item)
  })
}

export { fetchFromDict, fetchFromDictAsTable, results, resultsTable }
