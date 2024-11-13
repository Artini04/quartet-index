<script setup lang="ts">
import { type Word } from "@/stores/type"
import { useOptions } from "@/stores/lookup"
import { convertToFull } from "@/utils/convert"

import WordDict from "./WordDict.vue"

const p = defineProps<{ item: Word }>()
const hasKanaKanji = !!p.item.data.ja_kana_kanji
const { cardShowLinks, cardJpTextSize, cardEnTextSize } = useOptions()
</script>

<template>
  <div class="word">
    <div class="word_info">
      <span class="word_info__lesson" :vol="item.info.lesson < 7 ? 1 : 2">
        第{{ convertToFull(item.info.lesson) }}課
      </span>
      <span class="word_info__reading flex-sm">
        読み{{ convertToFull(item.info.reading) }}
      </span>
      <span class="word_info__letter_location flex-sm">
        {{ item.info.letter_location }}
      </span>
      <span class="word_info__kanji">{{ item.info.kanji }}</span>
    </div>

    <div class="word_text">
      <div class="word_text__ja">
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

    <div class="word_dict" v-if="cardShowLinks">
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
@use "@/assets/style/modules/root" as rt;

// == PROPERTIES ==
$divs-gap: 0.6em 1em;
$info-gap: 0.6em;
$dict-gap: 1em;

// == COLOR ==
$background-color-odd: light-dark(white, rt.$black-10);
$border-color: light-dark(rgba(black, 0.2), rt.$black-gray);
$lesson-1-color: light-dark(#ff0000, rt.$red-muted);
$lesson-2-color: light-dark(#0000ff, rt.$blue-muted);
$hiragana-color: light-dark(rt.$yellow-light, rt.$yellow-dark);
$kana-kanji-color: light-dark(rt.$orange-light, rt.$orange-dark);

.word {
  display: flex;
  flex-flow: column nowrap;
  gap: 0;

  overflow: hidden;
  border: rt.$border-thick solid $border-color;
  border-radius: rt.$border-radius;

  & > div {
    padding: $divs-gap;
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
  }

  &_info__lesson {
    flex: 999 1;
    &[vol="1"] {
      color: $lesson-1-color;
    }
    &[vol="2"] {
      color: $lesson-2-color;
    }
  }

  // == JAPANESE ==
  &_text__ja {
    font-size: v-bind(cardJpTextSize);
    color: $hiragana-color;
    & > :first-child {
      color: $kana-kanji-color;
    }
  }

  // == ENGLISH ==
  &_text__en {
    font-size: v-bind(cardEnTextSize);
    &::before {
      content: "英";
      margin-right: 0.5em;
    }
    &_verb_type {
      font-style: italic;
    }
  }

  // == DICTIONARY ==
  &_dict {
    display: flex;
    flex-flow: row nowrap;
    gap: $dict-gap;
    overflow-x: auto;
    font-size: 0.9em;
  }
}
</style>
