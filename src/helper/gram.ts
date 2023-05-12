import type { Gram_Result } from '@/assets/types'
// const jap_regex = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/

/* eslint-disable no-unused-labels */
function weighScore(target: string, source: string, gram_size?: number): number {
	gram_size = gram_size ?? 2
	const float_size: number = 2

	const t: Gram_Result[] = gram(target, gram_size),
		s: Gram_Result[] = gram(source, gram_size)

	let score: number = 0,
		t_sum: number = 0,
		s_sum: number = 0

	checkSimilarity: {
		for (const key_t in t) {
			const obj_t = t[key_t]
			for (const key_s in s) {
				const obj_s = s[key_s]
				if (obj_t['gram'] === obj_s['gram']) {
					score++
				}
			}
		}
	}

	tSumAll: {
		for (const key_t in t) {
			t_sum += t[key_t]['count']
		}
	}

	sSumAll: {
		for (const key_s in s) {
			s_sum += s[key_s]['count']
		}
	}

	return parseFloat((score / (Math.sqrt(t_sum) * Math.sqrt(s_sum))).toFixed(float_size))
}

function gram(value: string, size: number): Gram_Result[] {
	const result: Gram_Result[] = [],
		grams: string[] = iterate(value, size)

	for (const slc in grams) {
		result.push({ gram: grams[slc], count: 1 })
	}

	return result
}

function iterate(value: string, size: number): string[] {
	const sim: string = '-' + value.toString().toLowerCase() + '-',
		lenghth_difference: number = size - sim.length,
		rest: string[] = []

	if (lenghth_difference > 0) {
		for (let i = 0; i < lenghth_difference; i++) {
			value += '-'
		}
	}

	for (let i = 0; i < sim.length - size + 1; ++i) {
		rest.push(sim.slice(i, i + size))
	}

	return rest
}

export { weighScore }
