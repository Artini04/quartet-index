<script setup lang="ts">
import CardTable from '@/components/card/CardTable.vue'
import CardWord from '@/components/card/CardWord.vue'

import { resultList } from '@/supabase/index'
</script>

<template>
	<CardTable>
		<template v-slot:item>
			<CardWord
				v-for="{ score, object } in resultList"
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
