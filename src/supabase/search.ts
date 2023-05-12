import { supabase } from '.'
import { ref } from 'vue'

import type { Word_Scored } from '@/assets/types'
import { scoreTargetSource } from '@/helper'

const limit: number = 20
const resultList = ref<Word_Scored[]>([])

async function getQuartet(keyword: string) {
	const { data, error } = await supabase.rpc('search_quartet', { keyword: keyword }).limit(limit)

	if (error) console.log(error)
	else {
		resultList.value = []
		const targetKeys: string[] = ['ja-kk', 'ja-h', 'en', 'special-case']
		const value = scoreTargetSource(data, targetKeys, keyword)
		resultList.value.push(...value)
	}
}

function debounce(func: any, timeout: number = 500) {
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

export { searchWord, resultList }
