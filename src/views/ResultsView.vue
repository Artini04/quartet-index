<script setup lang="ts">
import CardTable from '@/components/card/CardTable.vue'
import CardWord from '@/components/card/CardWord.vue'

import { resultList } from '@/supabase/index'
</script>

<template>
	<main class="flow-y-50">
		<CardTable>
			<template v-slot:item>
				<CardWord
					v-for="{ score, object } in resultList"
					:key="object['id'] + Math.floor(Math.random() * 50)"
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
					:kanji="object['kanji']"
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
</style>
