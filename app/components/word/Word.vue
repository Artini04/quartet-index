<script setup lang="ts">
import type { Word } from "~/composables/type"
import { convertToFull } from "~/utils/convert"

const p = defineProps<{ item: Word }>()
const hasKanaKanji = !!p.item.data.ja_kana_kanji
</script>

<template>
  <div class="word">
    <div class="word_info">
      <span class="word_info__lesson" :vol="item.info.lesson < 7 ? 1 : 2">
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
    <div class="word_text">
      <div class="word_text__ja" jp>
        <span>
          {{ hasKanaKanji ? item.data.ja_kana_kanji : item.data.ja_hiragana }}
        </span>
        <span v-if="hasKanaKanji">
          {{ item.data.ja_particle }}
          {{ item.data.ja_hiragana }}
          {{ item.data.ja_suru }}
        </span>
      </div>
      <div class="word_text__en">
        <span>{{ item.data.en_meaning.join("; ") }}</span>
        <span class="word_text__en_verb_type" v-if="item.data.en_verb_type">
          {{ item.data.en_verb_type }}
        </span>
      </div>
    </div>
    <div class="word_dict">
      <WordDict
        :src="`https://jpdb.io/search?q=${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }#a`"
        value="jpdb" />
      <WordDict
        :src="`https://jisho.org/search/${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }`"
        value="jisho" />
      <WordDict
        :src="`https://ejje.weblio.jp/content/${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }`"
        value="Weblio辞書" />
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/style/modules/root" as rt;
@use "~/assets/style/modules/utilities" as ut;

// PROPERTIES
$divs-pad: 0.4em 0.6em;
$info-gap: 0.6em;
$dict-gap: 1em;

// COLOR
$background-color-odd: light-dark(red, rt.$black-01);
$border-color: light-dark(red, rt.$black-03);
$lesson-1-color: light-dark(red, rt.$red-00);
$lesson-2-color: light-dark(red, rt.$blue-00);
$hiragana-color: light-dark(red, rt.$yellow-00);
$kana-kanji-color: light-dark(red, rt.$orange-00);

.word {
  @include ut.with-border();
  border-color: $border-color;
  overflow: hidden;

  & > div {
    padding: $divs-pad;
    &:nth-child(odd) {
      background: $background-color-odd;
    }
  }

  &_info {
    display: flex;
    flex-flow: row nowrap;
    gap: $info-gap;
    & > span {
      text-wrap: nowrap;
    }

    &__lesson {
      flex: 999 1;
      &[vol="1"] {
        color: $lesson-1-color;
      }
      &[vol="2"] {
        color: $lesson-2-color;
      }
    }
  }

  // JAPANESE
  &_text__ja {
    color: $hiragana-color;
    & > :first-child {
      color: $kana-kanji-color;
    }
  }

  // ENGLISH
  &_text__en {
    &::before {
      content: "英";
      margin-right: 0.5em;
    }
    &_verb_type {
      font-style: italic;
    }
  }

  // DICTIONARY
  &_dict {
    display: flex;
    flex-flow: row wrap;
    gap: 1em;
  }
}
</style>
