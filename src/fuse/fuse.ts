import { ref, type Ref } from 'vue'
import Fuse from 'fuse.js'
import vocabDictJSON from './words_list.json'

const fusedCommonDict = new Fuse(vocabDictJSON, {
  keys: ['ja-kk', 'ja-h', 'en'],
  shouldSort: true,
  threshold: 0.2
})

const results: Ref<any[]> = ref([]),
  debugLinks: Ref<boolean> = ref(true)

function fetchFromDict(keyword: string) {
  // Clear the result list then get the result
  results.value = []
  const value = fusedCommonDict.search(keyword)

  value.forEach((item) => {
    results.value.push(item)
  })
}

export { fetchFromDict, results, debugLinks }
