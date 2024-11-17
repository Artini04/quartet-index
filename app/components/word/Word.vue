<script setup lang="ts">
import type { Word } from "~/composables/type"
import { convertToFull } from "~/utils/convert"

const p = defineProps<{ item: Word }>()
const hasKanaKanji = !!p.item.data.ja_kana_kanji
const { appOptions, wordJpTextSize, wordEnTextSize } = useOptions()
</script>

<template>
  <div class="word">
    <div class="word_info">
      <span class="word_info__lesson" :book="item.info.lesson < 7 ? 1 : 2">
        第{{ convertToFull(item.info.lesson) }}課
      </span>
      <span class="word_info__reading">
        読み{{ convertToFull(item.info.reading) }}
      </span>
      <span class="word_info__letter_loc">
        {{ item.info.letter_location }}
      </span>
      <span class="word_info__kanji">
        {{ item.info.kanji }}
      </span>
    </div>
    <div class="word-text">
      <div class="word-text__ja" jp>
        <span>
          {{ hasKanaKanji ? item.data.ja_kana_kanji : item.data.ja_hiragana }}
        </span>
        <span v-if="hasKanaKanji">
          {{ item.data.ja_particle }}
          {{ item.data.ja_hiragana }}
          {{ item.data.ja_suru }}
        </span>
      </div>
      <div class="word-text__en">
        <span v-for="(word, refIndex) in item.data.en_meaning" :key="refIndex">
          <span>{{ word }}</span>
          <span class="word-text__en_verb_type" v-if="item.data.en_verb_type">
            {{ item.data.en_verb_type }}
          </span>
        </span>
      </div>
    </div>
    <div class="word_dict" v-if="appOptions.wordShowDicts">
      <ActionLinkExternal
        :src="`https://jpdb.io/search?q=${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }#a`"
        text="jpdb" />
      <ActionLinkExternal
        :src="`https://jisho.org/search/${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }`"
        text="jisho" />
      <ActionLinkExternal
        :src="`https://ejje.weblio.jp/content/${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }`"
        text="Weblio辞書" />
    </div>
  </div>
</template>

<style lang="scss">
// PROPERTIES
$divs-padding: 0.4em 0.6em;
$info-spacing: 0.6em;
$dict-spacing: 1em;
$english-spacing: 0.4em;

$word-text-spacing: 0.4em;
$word-dict-spacing: 0.6em;

// COLOR
$background: light-dark(red, root.$black-00);
$background-odd: light-dark(red, root.$black-dark-00);
$border: light-dark(red, root.$black-dark-00-m);
$book-1: light-dark(red, root.$red-dark-font-00);
$book-2: light-dark(red, root.$blue-dark-font-00);
$hiragana: light-dark(red, root.$yellow-dark-font-00);
$kana-kanji: light-dark(red, root.$orange-dark-font-00);

.word {
  overflow: hidden;
  background: $background;

  @include util.with-border($border);

  & > div {
    padding: $divs-padding;

    &:nth-child(odd) {
      background: $background-odd;
    }
  }

  &_info {
    @include util.flex(row, nowrap, $info-spacing);

    & > span {
      text-wrap: nowrap;
    }

    &__lesson {
      flex: 999 1;

      &[book="1"] {
        color: $book-1;
      }
      &[book="2"] {
        color: $book-2;
      }
    }
  }

  &-text {
    @include util.space(margin-top, $word-text-spacing);

    // JAPANESE
    &__ja {
      font-size: v-bind(wordJpTextSize);
      color: $hiragana;

      & > :first-child {
        color: $kana-kanji;
      }
    }

    // ENGLISH
    &__en {
      font-size: v-bind(wordEnTextSize);
      @include util.flex(column, nowrap, $english-spacing);

      & > span::before {
        content: "英";
        margin-right: 0.5em;
      }

      &_verb_type {
        font-style: italic;
      }
    }
  }

  // DICTIONARY
  &_dict {
    @include util.flex(row, wrap, $word-dict-spacing);
  }
}
</style>
