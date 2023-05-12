<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'

import type { Word } from '@/assets/types'

import CardTable from '@/components/card/CardTable.vue'
import CardWord from '@/components/card/CardWord.vue'

const result_list = ref<Word[]>([]),
	search_query = ref<string>('')

async function getQuartet(keyword: string) {
	const { data, error } = await supabase
		.rpc('search_quartet', {
			keyword: keyword,
		})
		.limit(50)

	if (error) console.error(error)
	else {
		result_list.value = []
		result_list.value.push(...data)
	}
}
</script>

<template>
	<div class="">
		<input
			v-model="search_query"
			type="text" />
		<input
			@click.prevent="getQuartet(search_query)"
			type="button"
			value="Sample Search" />
	</div>

	<CardTable>
		<template v-slot:item>
			<CardWord
				v-for="word in result_list"
				:key="word['id'] + Math.floor(Math.random() * 10)"
				:ja_kk="word['ja-kk']"
				:ja_h="word['ja-h']"
				:ja_h_add="word['ja-h-add']"
				:en="word['en']"
				:lesson="word['lesson']"
				:reading="word['reading']"
				:kanji="word['kanji']" />
		</template>
	</CardTable>
</template>

<style lang="scss"></style>
