import { ref, type Ref } from 'vue'
import Fuse from 'fuse.js'
import vocabDict from './dictionary.json'

const fusedDict = new Fuse(vocabDict, {
  keys: [
    ['data', 'ja_kana_kanji'],
    ['data', 'ja_furigana'],
    ['data', 'en_meaning']
  ],
  shouldSort: true,
  threshold: 0.2
})

const fusedLessonDict = new Fuse(vocabDict, {
  keys: [['info', 'lesson']]
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
  const value = fusedDict.search(keyword)

  value.forEach((item) => {
    results.value.push(item)
  })
}

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

export { fetchFromDict, fetchFromDictAsTable, results, resultsTable }
