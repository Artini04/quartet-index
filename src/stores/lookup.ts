import Fuse from 'fuse.js'
import { defineStore, storeToRefs } from 'pinia'
import { ref, unref, computed } from 'vue'
import type { Ref } from 'vue'
import Dictionary from './dictionary.json' with { type: 'json' }

// TODO: create better searching function
const useSearchStore = defineStore('search', () => {
    const defaultKeys = ['data.ja_kana_kanji', 'data.ja_hiragana', 'data.en_meaning']

    const searchQuery: Ref<string> = ref('')
    const keysQuery: Ref<string[]> = ref(defaultKeys)
    const limitQuery: Ref<number> = ref(25)
    const thresholdQuery: Ref<number> = ref(0.2)

    const fusedQuery = computed(() => {
        const fusedInit = new Fuse(Dictionary, {
            shouldSort: true,
            keys: unref(keysQuery),
            threshold: unref(thresholdQuery),
            includeScore: true
        })

        const results = fusedInit.search(unref(searchQuery.value), { limit: unref(limitQuery) })
        return { fusedInit, results }
    })

    return {
        searchQuery,
        keysQuery,
        limit: limitQuery,
        threshold: thresholdQuery,
        fusedQuery
    }
})

const useOptionsStore = defineStore('options', () => {
    const siteTheme: Ref<string> = ref('')
    const cardShowLinks: Ref<boolean> = ref(true)

    return { siteTheme, cardShowLinks }
})

function useLookup() {
    const searchStore = useSearchStore()
    const { searchQuery, fusedQuery } = storeToRefs(searchStore)
    return { searchQuery, fusedQuery }
}

export { useSearchStore, useOptionsStore, useLookup }
