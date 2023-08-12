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

const iconSize = 20

function truncate(string: string): string {
	return string.length > 4 ? string.slice(0, 4) + '...' : string
}
</script>

<template>
	<div class="card-root">
		<div class="card-info shade">
			<span class="goto-lesson" :vol="lesson >= 7 ? 2 : 1">Lesson {{ lesson }} </span>
			<span class="goto-reading">読み{{ reading }}</span>
			<span class="kanji-learn-recommend">
				{{ kanji === 0 ? '&#12288;' : kanji == 2 ? '&#9670;' : '&#9671;' }}
			</span>
		</div>

		<div class="card-text">
			<div class="card-text__ja" lang="ja">
				<span
					class="ja-kk"
					v-for="item in ja_kk ? ja_kk?.split(';') : ja_h?.split(';')"
					:key="item">
					{{ item }}
				</span>

				<div class="ja-phs">
					<span v-if="ja_h_add" class="ja-particle">{{ `[${ja_h_add}]` }}</span>
					<span
						class="ja-h"
						v-for="item in ja_kk ? ja_h?.split(';') : []"
						:key="item">
						{{ item }}
					</span>
					<span v-if="ja_h_suru" class="ja-suru">({{ ja_h_suru }})</span>

				</div>
			</div>

			<div class="card-text__en">
				<span
					class="en-en"
					v-for="item in en?.split(';')"
					:key="item">
					{{ item }}
					<span v-if="en_add" class="en-verb-type"> [{{ en_add }}] </span>
				</span>
			</div>
		</div>

		<div class="card-link shade">
			<div class="card-link__links">
				<Icon icon="tabler:book-2" :width="iconSize" :height="iconSize" />
				<span class="links-span"> jpdb.io </span>
				<div class="links-open">
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

			<div class="card-link__links">
				<Icon icon="tabler:book-2" :width="iconSize" :height="iconSize" />
				<span class="links-span"> weblio英和辞書 </span>
				<div class="links-open">
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
:root {
	--card-border-color: #7b7b80;
	--card-font-color: #3f3f3f;
	--card-shade-color: #000000;

	--book-vol-1: #ff677c;
	--book-vol-2: #50b0ff;
	--book-vol-other: #ffffff;
	--link-color: #ffffff;

	--en-symbol: '\82F1';
	--kana-kanji: rgb(241, 109, 69);
}

.shade {
	background-color: rgba($color: #000000, $alpha: 0.2);
}

.card {
	$card-bordering-corner-radius: 7px;
	$card-spacing-from-border-to-data: 1rem;
	$card-meaning-spacing-left: 20px;
	
	&-root {
		display: flex;
		flex-flow: column nowrap;
		gap: 0;

		padding: $card-spacing-from-border-to-data;
		border: 1px solid var(--card-border-color, #f3f3f3);
		border-radius: $card-bordering-corner-radius;
	}

	&-info, &-link {
		display: flex;
		flex-flow: row nowrap;
		flex-grow: 0;
		gap: 0;

		align-items: center;
		justify-content: center;

		padding: 0.5rem 1rem;
		border-radius: $card-bordering-corner-radius;
	}

	&-info {
		.goto {
			&-reading, &-lesson {
				flex: 1 1 50%;
			}

			&-lesson {
				color: var(--book-vol-other, #000000);

				&[vol='1'] {
					color: var(--book-vol-1);
				}

				&[vol='2'] {
					color: var(--book-vol-2);
				}
			}
		}
	}

	&-link {
		&__links {
			flex: 1 1 50%;

			// Icon fine-tuning
			svg {
				vertical-align: middle;
				margin-bottom: 3px;
			}

			.links {
				&-open {
					margin-top: 0.4rem;
	
					span {
						display: block;
						&::before {
							content: '-';
							margin-right: 0.5rem;
						}
					}
	
					&>span+span {
						margin-top: 0.25rem;
					}
				}
			}
		}
	}

	&-text {
		flex-grow: 1;
		padding: $card-spacing-from-border-to-data;

		&>*{
			display: block;
		}

		&>*+*{
			margin-top: 0.3rem;
		}

		&__ja {
			text-align: center;

			&>*{
				display: block;
			}

			.ja {
				&-kk {
					font-size: 2rem;
					line-height: 2.3rem;
					color: var(--kana-kanji);
				}
	
				&-h {
					font-size: 1.3rem;
					line-height: 1.6rem;
				}
	
				&-phs {
					&>*+*{
						margin-left: 0.5rem;
					}
				}
			}
		}

		&__en {
			.en {
				&-en {
					display: block;
	
					&::before {
						content: var(--en-symbol);
						margin-right: 0.5rem;
					}
				}
	
				&-en + span {
					margin-top: 0.3rem;
				}

				&-verb-type {
					font-style: italic;
				}
			}
		}

		&__add {
			&>*+*{
				margin-left: 0.5rem;
			}
		}
	}
}
</style>