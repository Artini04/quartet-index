<script setup lang="ts">
	import type { Data, Info } from "~~/shared/types"

	interface Props {
		id: number
		data: Data
		info: Info
	}

	const { data } = defineProps<Props>()

	const jpFirst = data.ja_kana_kanji ?? data.ja_hiragana
	const jpSecond = data.ja_kana_kanji === jpFirst ? data.ja_hiragana : null
</script>
<template>
	<div class="table-item">
		<div class="table-item-info">
			<p>{{ info.kanji }}</p>
			<p class="table-item-info__letter">{{ info.letter_location }}</p>
			<p>読{{ convertToFull(info.reading) }}</p>
		</div>

		<div class="table-item-word">
			<div class="table-item-word-ja">
				<p class="table-item-word__jp-1">{{ jpFirst }}</p>
				<p v-if="jpSecond" class="table-item-word__jp-2">
					{{ jpSecond }}
				</p>
				<p v-if="data.ja_particle">{{ data.ja_particle }}</p>
				<p v-if="data.ja_suru">{{ data.ja_suru }}</p>
			</div>

			<div class="table-item-word-en">
				<p>ー {{ data.en_meaning.join(", ") }}</p>
				<p v-if="data.en_verb_type" class="table-item-word__en-type">
					{{ data.en_verb_type }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.table-item {
		display: grid;
		grid-template-columns: 50px 9fr;

		& + .table-item {
			border-block-start: 1px solid hsl(0, 0%, 100%, 0.1);
		}
	}

	.table-item-info,
	.table-item-word {
		padding-block: 0.4em;
	}

	.table-item-info {
		display: flex;
		flex-flow: column nowrap;
		place-items: center;
		place-content: center;

		font-size: 0.8em;

		&__letter {
			color: hsl(0, 0%, 60%);
		}
	}

	.table-item-word {
		border-inline-start: var(--global-border);
		padding-inline-start: 1em;

		&-ja,
		&-en {
			display: flex;
			flex-flow: row wrap;
			gap: 0 1ch;
		}

		&__jp-1 {
			color: hsl(14, 100%, 60%);
		}

		&__jp-2 {
			color: hsl(50, 100%, 60%);
		}

		&__en-type {
			font-style: italic;
		}
	}
</style>
