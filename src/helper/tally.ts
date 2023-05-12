import type { Word_Scored } from '@/assets/types'
import { weighScore } from './gram'

function scoreTargetSource(data_from_axios: any, target_keys: string[], search_query: string) {
	const filtered_vocab_list: Word_Scored[] = []
	for (const item in data_from_axios) {
		const scan_item = []
		const word_item = data_from_axios[item]

		for (const tk in target_keys) {
			const tk_targ = target_keys[tk],
				tk_val = word_item[tk_targ]

			if (tk_val) {
				const value = tk_val.split(';')
				for (const key in value) {
					scan_item.push(value[key])
				}
			}
		}

		const score_list: number[] = []

		for (const key in scan_item) {
			const value = weighScore(search_query, scan_item[key])
			score_list.push(value)
		}

		if (Math.max(...score_list) > 0.1) {
			filtered_vocab_list.push({ score: Math.max(...score_list), object: word_item })
		}
	}

	filtered_vocab_list.sort((a, b) => b.score - a.score)

	return filtered_vocab_list
}

export { scoreTargetSource }
