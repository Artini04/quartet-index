<script lang="ts" setup>
import type { Word } from "~/utils/types"
import { convertToFull } from "~/utils/convert"

const { data } = defineProps<Word>()
const hasKanaKanji = !!data.ja_kana_kanji
const { appOptions } = useApplication()
const { enlargeEnglishText, enlargeJapaneseText } = appOptions.value
const jpTextSize = enlargeJapaneseText.active
  ? `${enlargeJapaneseText.largeSize}em`
  : "1em"
const enTextSize = enlargeEnglishText.active
  ? `${enlargeEnglishText.largeSize}em`
  : "1em"
</script>

<template>
  <div class="word-card">
    <!-- INFO -->
    <div class="info-wrapper">
      <span class="lesson" :book="info.lesson < 7 ? 1 : 2">
        第{{ convertToFull(info.lesson) }}課
      </span>
      <span class="reading">読み{{ convertToFull(info.reading) }}</span>
      <span class="location">{{ info.letter_location }}</span>
      <span class="kanji">{{ info.kanji }}</span>
    </div>

    <!-- CONTENT -->
    <div class="content-wrapper">
      <div class="japanese-wrapper" jp>
        <p class="kana-kanji">
          {{ hasKanaKanji ? data.ja_kana_kanji : data.ja_hiragana }}
        </p>
        <p class="hiragana">
          {{ data.ja_particle }}
          <span v-if="hasKanaKanji">{{ data.ja_hiragana }}</span>
          {{ data.ja_suru }}
        </p>
      </div>
      <div class="meaning-wrapper">
        <p>{{ data.en_meaning.join("; ") }}</p>
        <p>{{ data.en_verb_type }}</p>
      </div>
    </div>

    <!-- LINKS -->
    <div class="link-wrapper" v-if="appOptions.showDictionary">
      <ActionLinkExternal
        text="Weblio英和辞典"
        :src="`https://ejje.weblio.jp/content/${
          data.ja_kana_kanji ?? data.ja_hiragana
        }`" />
      <ActionLinkExternal
        text="jpdb.io"
        :src="`https://jpdb.io/search?q=${
          data.ja_kana_kanji ?? data.ja_hiragana
        }#a`" />
      <ActionLinkExternal
        text="jisho.org"
        :src="`https://jisho.org/search/${
          data.ja_kana_kanji ?? data.ja_hiragana
        }`" />
    </div>
  </div>
</template>

<style lang="scss">
$wrapper-padding: 0.6em;
$wrapper-spacing: 0;
$info-spacing: 0 0.6em;
$content-spacing: 0 0.6em;
$link-spacing: 0 1em;

.word-card {
  position: relative;
  isolation: isolate;
  border: 1px solid hsl(230, 8%, 25%);
  border-radius: 7px;
  overflow: hidden;
  @include util.use-flex(column, nowrap, $wrapper-spacing);

  & > :nth-child(odd) {
    background: hsl(225, 5%, 15%);
  }

  & .info-wrapper,
  & .content-wrapper,
  & .link-wrapper {
    flex: 1 1;
    padding: $wrapper-padding;
  }

  // INFO
  & .info-wrapper {
    @include util.use-flex(row, nowrap, $info-spacing);

    & .lesson {
      flex: 99 1;

      &[book="1"] {
        color: hsl(0, 100%, 70%);
      }

      &[book="2"] {
        color: hsl(200, 100%, 70%);
      }
    }
  }

  // CONTENT
  & .content-wrapper {
    & .japanese-wrapper,
    & .meaning-wrapper {
      @include util.use-flex(row, wrap, $content-spacing);
    }

    & .japanese-wrapper {
      font-size: v-bind(jpTextSize);

      & .kana-kanji {
        color: hsl(14, 100%, 61%);
      }

      & .hiragana {
        color: hsl(49, 100%, 62%);
      }
    }

    & .meaning-wrapper {
      font-size: v-bind(enTextSize);

      &::before {
        content: "英";
      }
    }
  }

  // LINKS
  & .link-wrapper {
    font-size: 0.85em;
    color: hsl(0, 0%, 75%);
    @include util.use-flex(row, wrap, $link-spacing);

    & a {
      text-decoration: none;
    }
  }
}
</style>
