<script setup lang="ts">
	import type { Word } from "~~/shared/types"
	const { data } = defineProps<Word>()

	const jaText = data.ja_kana_kanji ?? data.ja_hiragana
	const jaSubtext = data.ja_kana_kanji === jaText ? data.ja_hiragana : null
</script>

<template>
	<div class="card-word">
		<CardWordInfo
			:lesson="info.lesson"
			:reading="info.reading"
			:location="info.letter_location"
			:diamond="info.kanji"
		/>
		<CardWordData
			:ja-text="jaText"
			:ja-subtext="jaSubtext"
			:ja-particle="data.ja_particle"
			:ja-suru="data.ja_suru"
			:en-meaning="data.en_meaning"
			:en-verb-type="data.en_verb_type"
		/>
	</div>
</template>
