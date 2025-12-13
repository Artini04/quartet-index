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
		<CardWordDict />
	</div>
</template>

<style lang="scss">
	$card-background-color--odd: var(--global-background-color);
	$card-padding-size: 0.6rem;
	$card-normalized-padding-size: 0.3rem;

	.card-word {
		border: var(--global-border);
		border-radius: var(--global-border-radius);
		overflow: clip;
	}

	.card-word-info,
	.card-word-data,
	.card-word-dict {
		padding: $card-padding-size;
	}

	.card-word-info {
		padding-block-end: $card-normalized-padding-size;
	}

	.card-word-dict {
		padding-block-start: $card-normalized-padding-size;
	}

	.card-word-info,
	.card-word-dict {
		font-size: 0.8em;
		background-color: $card-background-color--odd;
	}
</style>
