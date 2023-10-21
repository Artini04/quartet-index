<script setup lang="ts">
import type { Word } from '@/stores'
import { useOptionsStore } from '@/stores/options'

const localProps = defineProps<Word>()
const options = useOptionsStore()

const jpnFirst: string = localProps.data.ja_kana_kanji ?? localProps.data.ja_hiragana
const jpnSecond: string = localProps.data.ja_kana_kanji ? localProps.data.ja_hiragana : ''
const meaning: string[] = localProps.data.en_meaning
const links: string[] = [jpnFirst.slice(0, 4), jpnSecond.slice(0, 4)].filter((n) => n.length > 0)
</script>

<template>
  <div class="card-word | border-rounded-square" v-once>
    <!-- INFO -->
    <div class="card-word__info | shade">
      <span class="card-word__info__lesson" :vol="info.lesson < 7 ? 1 : 2">
        Lesson {{ info.lesson }}
      </span>
      <span class="card__info__reading"> 読み{{ info.reading }} </span>
      <span class="card__info__new-kanji">{{ info.kanji }}</span>
    </div>

    <!-- JAPANESE AND ENGLISH -->
    <div class="card-word__text | block-y">
      <div class="card-word__text__ja" lang="ja">
        <span class="ja-kk">{{ jpnFirst }}</span>
        <div class="ja-phs">
          <span class="ja-particle" v-if="data.ja_particle">{{ data.ja_particle }}</span>
          <span class="ja-h">{{ jpnSecond }}</span>
          <span class="ja-suru" v-if="data.ja_suru">{{ data.ja_suru }}</span>
        </div>
      </div>

      <div class="card-word__text__en">
        <span>{{ meaning.join('; ') }}</span>
        <span v-if="data.en_verb_type">{{ data.en_verb_type }}</span>
      </div>
    </div>

    <!-- LINKS -->
    <div class="card-word__link | shade" v-if="options.card_show_links">
      <!-- FIRST LINK -->
      <div class="card-word__link__box">
        <span>jpdb.io</span>
        <ul class="links">
          <li class="link" v-for="item in links" :key="item">
            <a :href="`https://jpdb.io/search?q=${item}#a`" target="_blank">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <!-- SECOND LINK -->
      <div class="card-wor__link__box">
        <span>Weblio辞書</span>
        <ul class="links">
          <li class="link" v-for="item in links" :key="item">
            <a :href="`https://ejje.weblio.jp/content/${item}`" target="_blank">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

$card-component-border-color: var(--component-border-color);

$meaning-symbol: var(--en-symbol);
$meaning-margin-right: 0.5rem;
$kana-kanji-color: var(--kana-kanji);
$hiragana-color: var(--hiragana);

$padding: 0.4rem 1rem;

.card-word {
  // @include flex(column, nowrap, 1rem);
  border: 1px solid $card-component-border-color;
  overflow: hidden;

  // ==== //
  // INFO //
  // ==== //
  &__info {
    @include flex(row, nowrap, 0.5rem);
    padding: $padding;

    &__id {
      background: var(--component-border-color);
      padding-inline: 0.3rem;
    }

    &__lesson,
    &__reading {
      flex: 1 1 50%;
    }

    &__lesson {
      &[vol='1'] {
        color: var(--book-vol-1);
      }

      &[vol='2'] {
        color: var(--book-vol-2);
      }
    }

    &__reading {
      text-align: right;
    }
  }

  // ==================== //
  // JAPANESE AND ENGLISH //
  // ==================== //
  &__text {
    flex-grow: 1;
    padding: $padding;

    &__ja {
      @include spacing(0.5rem, x, inline-block);

      .ja {
        &-kk {
          font-size: 1.4rem;
          color: $kana-kanji-color;
        }

        &-phs {
          .ja-h {
            color: $hiragana-color;
          }
        }
      }
    }

    &__en {
      &::before {
        content: $meaning-symbol;
        margin-right: $meaning-margin-right;
      }
    }
  }

  // ===== //
  // LINKS //
  // ===== //
  &__link {
    @include flex(row, nowrap, 0.5rem);
    padding: $padding;

    & > * {
      flex: 1 1 50%;
    }

    li::before {
      content: '-';
      margin-right: 0.5rem;
    }
  }
}
</style>
