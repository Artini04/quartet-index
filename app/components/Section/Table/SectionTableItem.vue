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
			<p
				:class="
					info.lesson < 7 ?
						'table-item-info--book-1'
					:	'table-item-info--book-2'
				"
			>
				LSN{{ info.lesson }}
			</p>
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
		grid-template-columns: 50px 10fr;
		box-shadow: 0 0 1px 1px var(--global-border-color);
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

		&--book-1 {
			color: hsl(0, 100%, 70%);
		}

		&--book-2 {
			color: hsl(200, 100%, 70%);
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

		&-ja {
			font-size: 1.2em;
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
