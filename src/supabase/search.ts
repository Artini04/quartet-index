import { supabase } from '.'
import { ref, computed } from 'vue'

import type { Word_Scored } from '@/assets/types'
import { scoreTargetSource } from '@/helper'

const limit: number = 30
const resultList = ref<Word_Scored[]>([])
const isSearching = ref<boolean>(false)
const status = computed(() => {
	return isSearching.value ? 'fetch' : resultList.value.length > 0 ? 'ok' : 'none'
})

async function getQuartet(keyword: string) {
	isSearching.value = true

	const { data, error } = await supabase.rpc('fuzzy_search', { keyword: keyword }).limit(limit)

	if (error) console.log(error)
	else {
		resultList.value = []
		const targetKeys: string[] = ['ja-kk', 'ja-h', 'en', 'special-case']
		const value = scoreTargetSource(data, targetKeys, keyword)
		resultList.value.push(...value)
	}

	isSearching.value = false
}

function debounce(func: any, timeout: number = 100) {
	let timer: any

	return (...args: any[]) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			// @ts-ignore
			func.apply(this, args)
		}, timeout)
	}
}

const searchWord = debounce((keyword: string) => getQuartet(keyword))

export { getQuartet, searchWord, resultList, status }
