<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { scoreTargetSource } from '@/helper'

import type { Word_Scored } from '@/assets/types'

import CardTable from '@/components/card/CardTable.vue'
import CardWord from '@/components/card/CardWord.vue'

const result_list = ref<Word_Scored[]>([]),
	search_query = ref<string>(''),
	limit: number = 20

async function getQuartet(keyword: string) {
	const { data, error } = await supabase
		.rpc('search_quartet', {
			keyword: keyword,
		})
		.limit(limit)

	if (error) console.error(error)
	else {
		result_list.value = []
		const targetKeys: string[] = ['ja-kk', 'ja-h', 'en', 'special-case'],
			value = scoreTargetSource(data, targetKeys, search_query.value)
		result_list.value.push(...value)
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
		console.log(timer)
	}
}

const processChange = debounce(() => getQuartet(search_query.value))
</script>

<template>
	<div class="input-wrapper">
		<input
			v-model="search_query"
			@keypress.enter.prevent="processChange()"
			type="text"
			class="search-input"
			placeholder="Search..." />
		<input @click.prevent="processChange()" type="button" class="search-button" value="Go!" />
	</div>

	<CardTable>
		<template v-slot:item>
			<CardWord
				v-for="{ score, object } in result_list"
				:key="object['id'] + Math.floor(Math.random() * 10)"
				:ja_kk="object['ja-kk']"
				:ja_h="object['ja-h']"
				:ja_h_add="object['ja-h-add']"
				:en="object['en']"
				:lesson="object['lesson']"
				:reading="object['reading']"
				:kanji="object['kanji']"
				:score="score" />
		</template>
	</CardTable>
</template>

<style lang="scss">
.input-wrapper {
	display: flex;
	padding: 1rem;

	input {
		padding: 0.5rem;
		border-radius: 5px;

		&[type='text'] {
			border: 1px solid var(--app-font-muted);
			color: var(--app-font);

			&::placeholder {
				color: var(--app-font-muted);
			}
		}

		&[type='button'] {
			background: var(--app-font);
			transition: transform ease 100ms;

			&:is(:hover) {
				transform: scale(1.05);
			}

			&:active {
				transform: scale(0.95);
			}
		}
	}
}

@media screen and (max-width: 500px) {
	.input-wrapper {
		flex-flow: column nowrap;
		gap: 0.5rem;
	}
}

@media screen and (min-width: 501px) {
	.input-wrapper {
		flex-flow: row nowrap;
		gap: 0.5rem;

		max-width: 600px;
		margin-inline: auto;

		& > .search-input {
			flex: 1 1 90%;
		}

		& > .search-button {
			flex: 1 1 10%;
		}
	}
}
</style>
