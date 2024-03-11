<script setup lang="ts">
import type { Word } from '@/stores/type'
import { useOptions } from '@/stores/lookup'
import WordDict from './WordDict.vue'

const props = defineProps<{ item: Word }>()
const hasKanaKanji = props.item.data.ja_kana_kanji ? true : false
const { cardShowLinks, cardJpTextSize, cardEnTextSize } = useOptions()
</script>

<template>
    <div class="word">
        <div class="word-info | flow-rv | auto align-center">
            <span class="info-lesson" :vol="item.info.lesson < 7 ? 1 : 2">
                LSN {{ item.info.lesson }}
            </span>
            <span class="info-reading">読み{{ item.info.reading }}</span>
            <span class="flex-sm">{{ item.info.letter_location }}</span>
            <span class="flex-sm">{{ item.info.kanji }}</span>
        </div>
        <div class="word-text">
            <div class="word-text-ja | flow-rv-fx">
                <span>
                    {{ hasKanaKanji ? item.data.ja_kana_kanji : item.data.ja_hiragana }}
                </span>
                <span v-if="hasKanaKanji">
                    {{ item.data.ja_particle }}
                    {{ item.data.ja_hiragana }}
                    {{ item.data.ja_suru }}
                </span>
            </div>

            <div class="word-text-en | flow-rv-flex">
                <span>{{ item.data.en_meaning.join('; ') }}</span>
                <span class="verb-type" v-if="item.data.en_verb_type">
                    {{ item.data.en_verb_type }}
                </span>
            </div>
        </div>

        <div class="word-dict | flow-rv" v-if="cardShowLinks">
            <WordDict
                :src="`https://jpdb.io/search?q=${item.data.ja_kana_kanji ?? item.data.ja_hiragana}#a`"
                value="jpdb" />
            <WordDict
                :src="`https://jisho.org/search/${item.data.ja_kana_kanji ?? item.data.ja_hiragana}`"
                value="jisho" />
            <WordDict
                :src="`https://ejje.weblio.jp/content/${item.data.ja_kana_kanji ?? item.data.ja_hiragana}`"
                value="Weblio辞書" />
        </div>
    </div>
</template>

<style lang="scss">
.word {
    border: 1px solid var(--word-bd-color);
    border-radius: var(--g-bor-rad-00);
    overflow: hidden;

    & > * {
        padding: 0.4rem 0.6rem;
    }

    & > :nth-child(odd) {
        background: var(--word-bg-color);
    }

    &-text {
        &-ja {
            color: var(--hiragana);
            font-size: v-bind(cardJpTextSize);

            & > :first-child {
                color: var(--kana-kanji);
            }
        }

        &-en {
            font-size: v-bind(cardEnTextSize);
            &::before {
                content: '英';
                margin-right: 0.5rem;
            }

            .verb-type {
                font-style: italic;
            }
        }
    }

    &-dict {
        gap: 1rem;
    }
}

.info {
    &-lesson {
        &[vol='1'] {
            color: var(--book-vol-1);
        }

        &[vol='2'] {
            color: var(--book-vol-2);
        }
    }

    &-reading {
        text-align: right;
    }
}
</style>
