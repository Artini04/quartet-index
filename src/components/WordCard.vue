<script setup lang="ts">
import type { Word } from '@/stores'
import { useOptionsStore } from '@/stores'
import WordDict from './WordDict.vue'

const props = defineProps<{ item: Word }>()
const hasKanaKanji = props.item.data.ja_kana_kanji ? true : false
const options = useOptionsStore()
</script>

<template>
  <div class="word">
    <div class="word-info | flow-rv-fx flow-auto">
      <span class="info-lesson" :vol="item.info.lesson < 7 ? 1 : 2">
        Lesson {{ item.info.lesson }}
      </span>
      <span class="info-reading">読み{{ item.info.reading }}</span>
      <span class="flow-shrink">{{ item.info.letter_location }}</span>
      <span class="flow-shrink">{{ item.info.kanji }}</span>
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

    <div class="word-dict | flow-rv-fx" v-if="options.cardShowLinks">
      <WordDict
        :link="`https://jisho.org/search/${item.data.ja_kana_kanji ?? item.data.ja_hiragana}`"
        value="jisho" />
      <WordDict
        :link="`https://ejje.weblio.jp/content/${item.data.ja_kana_kanji ?? item.data.ja_hiragana}`"
        value="Weblio辞書" />
    </div>
  </div>
</template>

<style lang="scss">
.word {
  border: 1px solid var(--word-bd-color);
  border-radius: var(--gbl-bor-rad);
  overflow: hidden;

  & > * {
    padding: var(--gbl-pad-0);
  }

  & > :nth-child(odd) {
    background: var(--word-bg-color);
  }

  &-text {
    &-ja {
      color: var(--hiragana);

      & > :first-child {
        color: var(--kana-kanji);
      }
    }

    &-en {
      &::before {
        content: '英';
        margin-right: 0.5rem;
      }

      .verb-type {
        font-style: italic;
      }
    }
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
