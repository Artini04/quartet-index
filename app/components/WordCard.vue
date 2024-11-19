<script setup lang="ts">
import { type Word } from "~/utils/types/"
import { convertToFull } from "~/utils/convert"

interface WordCardProps {
  item: Word
  score?: number
}

const { item } = defineProps<WordCardProps>()
const hasKanaKanji = !!item.data.ja_kana_kanji
const { appOptions, wordJpTextSize, wordEnTextSize } = useOptions()
</script>

<template>
  <div class="word">
    <div class="word__info">
      <span class="lesson" :book="item.info.lesson < 7 ? 1 : 2">
        第{{ convertToFull(item.info.lesson) }}課
      </span>
      <span>読み{{ convertToFull(item.info.reading) }}</span>
      <span>{{ item.info.letter_location }}</span>
      <span>{{ item.info.kanji }}</span>
    </div>

    <div class="word__text">
      <div class="word__text--ja" jp>
        <span>
          {{ hasKanaKanji ? item.data.ja_kana_kanji : item.data.ja_hiragana }}
        </span>
        <span>
          {{ item.data.ja_particle }}
          <span v-if="hasKanaKanji">{{ item.data.ja_hiragana }}</span>
          {{ item.data.ja_suru }}
        </span>
      </div>
      <div class="word__text--en">
        <span>{{ item.data.en_meaning.join("; ") }}</span>
        <span class="italic">{{ item.data.en_verb_type }}</span>
      </div>
    </div>

    <div class="word__dict subtext" v-if="appOptions.wordShowDicts">
      <ActionLinkExternal
        :src="`https://ejje.weblio.jp/content/${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }`"
        text="Weblio英和辞典"
      />
      <ActionLinkExternal
        :src="`https://jpdb.io/search?q=${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }#a`"
        text="jpdb.io"
      />
      <ActionLinkExternal
        :src="`https://jisho.org/search/${
          item.data.ja_kana_kanji ?? item.data.ja_hiragana
        }`"
        text="jisho.org"
      />
    </div>
  </div>
</template>

<style lang="scss">
$spacing__info: 1em;
$spacing__dict: 0.4em 1em;
$padding__word: 0.4em;

$color__background: light-dark(red, root.$black-00);
$color__background-odd: light-dark(red, root.$black-dark-00);
$color__border: light-dark(red, root.$black-dark-00-m);
$color__book-1: light-dark(red, root.$red-dark-font-00);
$color__book-2: light-dark(red, root.$blue-dark-font-00);
$hiragana: light-dark(red, root.$yellow-dark-font-00);
$kana-kanji: light-dark(red, root.$orange-dark-font-00);

.word {
  overflow: hidden;
  background-color: $color__background;
  @include util.with-border($color__border, none);

  & > div {
    padding: $padding__word;
  }

  & > div:nth-child(odd) {
    background-color: $color__background-odd;
  }

  &__info {
    @include util.flex(row, nowrap, $spacing__info);
    @include util.flex-align(center);

    & span {
      text-wrap: nowrap;
    }

    & .lesson {
      flex: 999 1;
      &[book="1"] {
        color: $color__book-1;
      }
      &[book="2"] {
        color: $color__book-2;
      }
    }
  }

  &__text {
    &--ja {
      font-size: v-bind(wordJpTextSize);

      & :first-child {
        color: $kana-kanji;
      }

      & :last-child {
        color: $hiragana;
      }
    }

    &--en {
      font-size: v-bind(wordEnTextSize);

      & :first-child::before {
        content: "英";
        margin-right: 0.5em;
      }
    }
  }

  &__dict {
    @include util.flex(row, wrap, $spacing__dict);
    @include util.flex-align(center);
  }
}
</style>
