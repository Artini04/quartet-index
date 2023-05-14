<script setup lang="ts">
import CardTable from '@/components/card/CardTable.vue'
import CardWord from '@/components/card/CardWord.vue'

import { resultList } from '@/supabase/index'
</script>

<template>
	<main>
		<CardTable>
			<template v-slot:item>
				<CardWord
					v-for="{ score, object } in resultList"
					:key="object['id'] + Math.floor(Math.random() * 50)"
					:ja_kk="object['ja-kk']"
					:ja_h="object['ja-h']"
					:ja_h_add="object['ja-h-add']"
					:en="object['en']"
					:en_add="object['en-add']"
					:lesson="object['lesson']"
					:reading="object['reading']"
					:kanji="object['kanji']"
					:score="score" />
			</template>
		</CardTable>
	</main>
</template>

<style lang="scss">
main {
	max-width: 900px;
	margin-inline: auto;
	padding: 0 1rem;
}
</style>
