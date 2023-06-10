<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
	id: number
	ja_letter_loc: string
	ja_kk: string | null
	ja_h: string
	ja_h_add: string | null
	ja_h_suru: string | null
	en: string | null
	en_add: string | null
	lesson: number
	reading: number
	kanji: number
	score: number
	fav: boolean
}>()

const iconSize = 18

function truncate(string: string): string {
	return string.length > 4 ? string.slice(0, 4) + '...' : string
}
</script>

<template>
	<div class="card | flex flex-col-nowrap flex-gap-10 flex-bal | padding-30 | border border-20">
		<div
			class="info-wrapper | flex flex-row-nowrap flex-gap-10 flex-bal flex-center-center flex-nogrow | padding-10 | border-20 | shade text-center">
			<span class="goto | border-s" :vol="lesson >= 7 ? 2 : 1"> Lesson {{ lesson }} </span>
			<span class="reading">読み{{ reading }}</span>
			<span class="kanji-rem">
				{{ kanji === 0 ? '&#65343;' : kanji == 2 ? '&#9670;' : '&#9671;' }}
			</span>
		</div>

		<div class="text-wrapper | flow-y | padding-20">
			<div
				class="ja-wrapper | flex flex-row-wrap flex-start-center | ja-wrapper-gap"
				lang="ja">
				<span
					class="ja-kk | kana-kanji"
					v-for="item in ja_kk ? ja_kk?.split(';') : ja_h?.split(';')"
					:key="item">
					{{ item }}
				</span>

				<span
					class="ja-h | hiragana"
					v-for="item in ja_kk ? ja_h?.split(';') : []"
					:key="item">
					{{ item }}
				</span>
			</div>

			<div class="en-wrapper | flow-y">
				<span
					class="en | margin-left-40 | english"
					v-for="item in en?.split(';')"
					:key="item">
					{{ item }}
					<span v-if="en_add" class="verb-type"> [{{ en_add }}] </span>
				</span>
			</div>

			<div class="flow-x | margin-left-80">
				<span v-if="ja_h_add" class="ja-h-add | text-s">{{ `[${ja_h_add}]` }}</span>
				<span v-if="ja_h_suru" class="text-s">({{ ja_h_suru }})</span>
			</div>
		</div>

		<div
			class="link-wrapper | flex flex-row-nowrap flex-stretch-stretch flex-bal flex-nogrow | padding-20 | border-20 | shade">
			<div class="link">
				<Icon icon="tabler:book-2" :width="iconSize" :height="iconSize" />
				<span class="link-span | text-n"> jpdb.io </span>
				<div class="link-small-container | margin-top-20 | flow-y text-s">
					<span
						v-for="(item, index) in [
							...(ja_kk?.split(';') ?? []),
							...(ja_h?.split(';') ?? []),
						]"
						:key="index">
						<a :href="`https://jpdb.io/search?q=${item}#a`" target="_blank">
							{{ truncate(item) }}
						</a>
					</span>
				</div>
			</div>

			<div class="link">
				<Icon icon="tabler:book-2" :width="iconSize" :height="iconSize" />
				<span class="link-span | text-n"> weblio英和辞書 </span>
				<div class="link-small-container | margin-top-20 | flow-y text-s">
					<span
						v-for="(item, index) in [
							...(ja_kk?.split(';') ?? []),
							...(ja_h?.split(';') ?? []),
						]"
						:key="index">
						<a :href="`https://ejje.weblio.jp/content/${item}`" target="_blank">
							{{ truncate(item) }}
						</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
$spacing: 0.3rem;
$link-spacing: 0 0.4rem;

// Global Symbols
:root {
	--en-symbol: '\82F1';
}

// Dark Theme Palette
:root[data-theme='dark'] {
	--book-vol-1: #ff677c;
	--book-vol-2: #50b0ff;
	--link-color: #ffffff;

	--kana-kanji: rgb(241, 109, 69);
}

// ================ //
// 		BLOCK		//
// ================ //
.shade {
	background-color: rgba($color: #000000, $alpha: 0.2);
}

.ja-wrapper-gap {
	gap: 0.2rem 0.5rem;
}

.kana-kanji {
	font-size: 1.6rem;
	line-height: 2rem;
	color: var(--kana-kanji);
}

.hiragana {
	font-size: 1.2rem;
	line-height: 1.5rem;
}

.verb-type {
	display: inline-block;
	font-style: italic;
}

.english {
	&::before {
		content: var(--en-symbol);
		margin-right: 0.5rem;
	}
}

.goto {
	&[vol='1'] {
		color: var(--book-vol-1);
	}

	&[vol='2'] {
		color: var(--book-vol-2);
	}
}

div {
	&[vol='1'] {
		border-color: var(--book-vol-1);
	}

	&[vol='2'] {
		border-color: var(--book-vol-2);
	}
}

.link {
	svg {
		margin-bottom: -0.1rem;
	}

	&-small-container {
		span {
			&::before {
				content: '-';
				margin-right: 0.5rem;
			}
		}
	}
}

.bookmark {
	svg {
		margin-bottom: -0.2rem;
	}
}
</style>
