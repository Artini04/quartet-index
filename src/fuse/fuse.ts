import { ref, type Ref } from 'vue'
import Fuse from 'fuse.js'
import vocabDictJSON from './words_list.json'

const fusedCommonDict = new Fuse(vocabDictJSON, {
    keys: ['ja-kk', 'ja-h', 'en'],
    shouldSort: true,
    threshold: 0.2,
})

const searchResult: Ref<[]> = ref([])

function fetchFromDict(keyword: string) {
    const value = fusedCommonDict.search(keyword)

    value.forEach((word) => {
        console.log(word)
    })
}

export { fetchFromDict }
