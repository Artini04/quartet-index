import Fuse from 'fuse.js'
import { defineStore, storeToRefs } from 'pinia'
import { ref, unref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import Dictionary from './dictionary.json' with { type: 'json' }

// TODO: create better searching function
const useSearchStore = defineStore('search', () => {
    const defaultKeys = ['data.ja_kana_kanji', 'data.ja_hiragana', 'data.en_meaning']

    const searchQuery: Ref<string | null> = ref(null)
    const keysQuery: Ref<string[]> = ref(defaultKeys)
    const limitQuery: Ref<number> = useLocalStorage('app.limit', 10)
    const thresholdQuery: Ref<number> = useLocalStorage('app.threshold', 0.2)
    const hasSearched: Ref<boolean> = computed(() => {
        return searchQuery.value !== null ? true : false
    })

    const fusedQuery = computed(() => {
        const fusedInit = new Fuse(Dictionary, {
            shouldSort: true,
            keys: unref(keysQuery),
            threshold: unref(thresholdQuery),
            includeScore: true
        })

        const results = fusedInit.search(unref(searchQuery.value ?? ''), {
            limit: unref(limitQuery)
        })

        return results
    })

    return {
        searchQuery,
        keysQuery,
        limitQuery,
        thresholdQuery,
        hasSearched,
        fusedQuery
    }
})

function useLookup() {
    const searchStore = useSearchStore()
    const { searchQuery, limitQuery, thresholdQuery, fusedQuery, hasSearched } =
        storeToRefs(searchStore)

    return { searchQuery, limitQuery, thresholdQuery, fusedQuery, hasSearched }
}

const useOptionsStore = defineStore('options', () => {
    const cardShowLinks: Ref<boolean> = useLocalStorage('app.card-show-links', true)
    const cardBiggerJpText: Ref<boolean> = useLocalStorage('app.card-bigger-jp-text', false)
    const cardBiggerEnText: Ref<boolean> = useLocalStorage('app.card-bigger-en-text', false)

    const cardJpTextSize: Ref<string> = computed(() => {
        return cardBiggerJpText.value ? '1.4em' : '1em'
    })

    const cardEnTextSize: Ref<string> = computed(() => {
        return cardBiggerEnText.value ? '1.4em' : '1em'
    })

    return {
        cardShowLinks,
        cardBiggerJpText,
        cardJpTextSize,
        cardBiggerEnText,
        cardEnTextSize
    }
})

function useOptions() {
    const optionsStore = useOptionsStore()
    const { cardShowLinks, cardBiggerJpText, cardJpTextSize, cardBiggerEnText, cardEnTextSize } =
        storeToRefs(optionsStore)

    return { cardShowLinks, cardBiggerJpText, cardJpTextSize, cardBiggerEnText, cardEnTextSize }
}

export { useSearchStore, useOptionsStore, useLookup, useOptions }
