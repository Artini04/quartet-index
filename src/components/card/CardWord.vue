<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
	ja_kk: string | null
	ja_h: string | null
	ja_h_add: string | null
	en: string | null
	en_add: string | null
	kanji: number | null
	lesson: number
	reading: number
	score: number
}>()

const isDebug = false
const iconSize = 18
</script>

<template>
	<div class="card__root">
		<div class="card__ja-wrapper" lang="ja">
			<span
				class="ja-kk"
				v-for="item in ja_kk ? ja_kk?.split(';') : ja_h?.split(';')"
				:key="item">
				<span class="ja-h-add">{{ ja_h_add ? `[${ja_h_add}]` : '' }}</span>
				{{ item.trim() }}
			</span>
			<span class="ja-h" v-for="item in ja_kk ? ja_h?.split(';') : []" :key="item">
				{{ item.trim() }}
			</span>
		</div>
		<div class="card__en-wrapper">
			<span class="en" v-for="item in en?.split(';')" :key="item">
				{{ item.trim() }}
				<span class="verb-type" v-if="en_add"> [{{ en_add }}] </span>
			</span>
		</div>
		<div class="card__info-wrapper">
			<span class="goto" :vol="lesson >= 7 ? 2 : 1">
				{{ !kanji ? null : kanji === 2 ? '&#9670; ' : '&#9671; ' }}
				L{{ lesson }} 読み{{ reading }}
			</span>
		</div>
		<div class="card__link-wrapper">
			<div>
				<Icon icon="tabler:book-2" :width="iconSize" :height="iconSize" />
				<span class="link-wrapper__span"> jpdb.io </span>
				<div class="link-wrapper__small-container">
					<a
						v-for="(item, index) in ja_kk ? ja_kk.split(';') : ja_h?.split(';')"
						:key="item + 'key'"
						:href="`https://jpdb.io/search?q=${item}#a`"
						target="_blank"
						rel="noopener noreferrer">
						{{ item.length > 4 ? item.slice(0, 4) + '...' : item }} [{{ index }}]
					</a>
					<a
						v-for="(item, index) in ja_kk ? ja_h?.split(';') : []"
						:key="item + 'key'"
						:href="`https://jpdb.io/search?q=${item}#a`"
						target="_blank"
						rel="noopener noreferrer">
						{{ item.length > 4 ? item.slice(0, 4) + '...' : item }} [{{ index }}]
					</a>
				</div>
			</div>
			<div>
				<Icon icon="tabler:book-2" :width="iconSize" :height="iconSize" />
				<span class="link-wrapper__span"> weblio英和辞書 </span>
				<div class="link-wrapper__small-container">
					<a
						v-for="(item, index) in ja_kk ? ja_kk.split(';') : ja_h?.split(';')"
						:key="item + 'key'"
						:href="`https://ejje.weblio.jp/content/${item}`"
						target="_blank"
						rel="noopener noreferrer">
						{{ item.length > 4 ? item.slice(0, 4) + '...' : item }} [{{ index }}]
					</a>
					<a
						v-for="(item, index) in ja_kk ? ja_h?.split(';') : []"
						:key="item + 'key'"
						:href="`https://ejje.weblio.jp/content/${item}`"
						target="_blank"
						rel="noopener noreferrer">
						{{ item.length > 4 ? item.slice(0, 4) + '...' : item }} [{{ index }}]
					</a>
				</div>
			</div>
		</div>
		<div class="card__debug-wrapper" v-if="isDebug">
			<span class="debug-wrapper__debug-score">DEBUG WEIGHT SCORE: {{ score }}</span>
		</div>
	</div>
</template>

<style lang="scss">
:root[data-theme='dark'] {
	--book-vol-1: #ff677c;
	--book-vol-2: #50b0ff;
	--link-color: #ffffff;

	--goto-symbol: '\884C';
	--en-symbol: '\82F1';
}

.card {
	&__root {
		& > * + * {
			margin-top: 0.2rem;
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

			.ja-h-add {
				font-size: 1rem;
			}
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
				content: var(--en-symbol);
			}
		}
	}

	&__info-wrapper {
		.goto {
			&[vol='1'] {
				color: var(--book-vol-1);
			}

			&[vol='2'] {
				color: var(--book-vol-2);
			}

			&::before {
				content: var(--goto-symbol);
			}
		}
	}

	&__debug-wrapper {
		display: none;
		color: yellow;
	}

	&__link-wrapper {
		margin-top: 1rem;

		a {
			display: block;
			width: fit-content;
			color: var(--link-color);
		}

		& > div {
			position: relative;

			svg {
				aspect-ratio: 1;
				margin-bottom: -0.2rem;
			}
		}

		& > * + * {
			margin-top: 0.3rem;
		}
	}
}

.link-wrapper {
	&__small-container {
		display: flex;
		flex-flow: row wrap;
		gap: 0 1rem;
		font-size: 0.8rem;
	}

	&__span {
		margin-right: 0.5rem;
	}
}

.debug-wrapper {
	&__debug-score {
		font-size: 0.8rem;
	}
}
</style>
