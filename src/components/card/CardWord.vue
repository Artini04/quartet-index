<script setup lang="ts">
defineProps<{
	ja_kk: string | null
	ja_h: string | null
	ja_h_add: string | null
	en: string | null
	verb_type: string | null
	kanji: number | null
	lesson: number
	reading: number
	score: number
}>()

const is_debug = true
</script>

<template>
	<div class="card__root">
		<div
			class="card__ja-wrapper"
			lang="ja">
			<span
				class="ja-kk"
				v-for="item in ja_kk ? ja_kk?.split(';') : ja_h?.split(';')"
				:key="item">
				{{ item }}
			</span>
			<span
				class="ja-h"
				v-for="item in ja_kk ? ja_h?.split(';') : []"
				:key="item">
				{{ item }}
			</span>
		</div>
		<div class="card__en-wrapper">
			<span
				class="en"
				v-for="item in en?.split(';')"
				:key="item">
				{{ item }}
				<span
					class="verb-type"
					v-if="verb_type">
					[{{ verb_type }}]
				</span>
			</span>
		</div>
		<div
			class="card__info-wrapper"
			lang="ja">
			<span class="goto"
				>{{ !kanji ? null : kanji === 2 ? '&#9670; ' : '&#9671; ' }}L{{ lesson }} 読み{{
					reading
				}}
			</span>
		</div>
		<div
			class="card__debug-wrapper"
			:active="is_debug">
			<span>DEBUG WEIGHT SCORE: {{ score }}</span>
		</div>
	</div>
</template>

<style lang="scss">
.card {
	&__root {
		& > * + * {
			margin-top: 0.3rem;
		}
	}

	&__ja-wrapper {
		display: flex;
		flex-flow: row wrap;
		gap: 0 0.5rem;
		align-items: flex-end;

		.ja-kk {
			font-size: 1.2rem;
			color: var(--ja-kk);
		}
	}

	&__en-wrapper,
	&__info-wrapper {
		& > span {
			display: block;
			&::before {
				margin-right: 0.5rem;
				color: inherit;
			}
		}
	}

	&__en-wrapper {
		.en {
			display: block;
			.verb-type {
				display: inline-block;
				font-style: italic;
			}

			&::before {
				content: '\82F1';
			}
		}
	}

	&__info-wrapper {
		.goto {
			&::before {
				content: '\884C';
			}
		}
	}

	&__debug-wrapper {
		display: none;
		color: yellow;

		&[active='true'] {
			display: block;
		}
	}
}
</style>
