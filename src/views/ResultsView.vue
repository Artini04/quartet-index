<script setup lang="ts">
import SearchComp from '@/components/search/SearchComp.vue';
import CardTable from '@/components/card/CardTable.vue'
import CardWord from '@/components/card/CardWord.vue'

import { resultList } from '@/supabase/index'
</script>

<template>
	<SearchComp />
	<main>
		<CardTable>
			<template v-slot:item v-if="resultList.length > 0">
				<CardWord
					v-for="{ score, object } in resultList"
					:key="object['id'] + Math.floor(Math.random() * 9999)"
					:id="object['id']"
					:ja_letter_loc="object['ja-letter-loc']"
					:ja_kk="object['ja-kk']"
					:ja_h="object['ja-h']"
					:ja_h_add="object['ja-h-add']"
					:ja_h_suru="object['ja-h-suru']"
					:en="object['en']"
					:en_add="object['en-add']"
					:lesson="object['lesson']"
					:reading="object['reading']"
					:kanji="object['kanji'] ?? 0"
					:score="score"
					:fav="false" />
			</template>
		</CardTable>
	</main>
</template>

<style lang="scss">
main {
	max-width: 1200px;
	margin-inline: auto;
	padding: 0 1rem;
}

p.no-results {
	text-align: center;
	font-size: 1.5rem;
	margin: 2rem 0;
}
</style>
