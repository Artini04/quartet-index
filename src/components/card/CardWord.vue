<script setup lang="ts">
import { appOptions, type Word } from '@/fuse'

const localProps = defineProps<Word>()

const jpnFirst: string = localProps.data.ja_kana_kanji ?? localProps.data.ja_furigana
const jpnSecond: string = localProps.data.ja_kana_kanji ? localProps.data.ja_furigana : ''
const meaning: string[] = localProps.data.en_meaning
const links: string[] = [jpnFirst.slice(0, 4), jpnSecond.slice(0, 4)].filter((n) => n.length > 0)
</script>

<template>
  <div class="card__root | radius" v-once>
    <!-- INFO -->
    <div class="card__info | shade">
      <span class="card__info__id | radius">{{ id }}</span>
      <span class="card__info__lesson" :vol="info.lesson < 7 ? 1 : 2">
        Lesson {{ info.lesson }}
      </span>
      <span class="card__info__reading"> 読み{{ info.reading }} </span>
      <span class="card__info__new-kanji">{{ info.kanji }}</span>
    </div>

    <!-- JAPANESE AND ENGLISH -->
    <div class="card__text | block-y">
      <div class="card__text__ja" lang="ja">
        <span class="ja-kk">{{ jpnFirst }}</span>
        <div class="ja-phs">
          <span class="ja-particle" v-if="data.ja_particle">{{ data.ja_particle }}</span>
          <span class="ja-h">{{ jpnSecond }}</span>
          <span class="ja-suru" v-if="data.ja_suru">{{ data.ja_suru }}</span>
        </div>
      </div>

      <div class="card__text__en">
        <div class="en-meaning" v-for="item in meaning" :key="item">
          <span class="en-meaning__en">{{ item }}</span>
          <span class="en-meaning__add" v-if="data.en_verb_type">{{ data.en_verb_type }}</span>
        </div>
      </div>
    </div>

    <!-- LINKS -->
    <div class="card__link | shade" v-if="appOptions.cardOptions.showLinks">
      <div class="card__link__box">
        <span>jpdb.io</span>
        <ul class="links">
          <li class="link" v-for="item in links" :key="item">
            <a :href="`https://jpdb.io/search?q=${item}#a`" target="_blank">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <div class="card-link-link">
        <span>Weblio英和辞書</span>
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

.card {
  &__root {
    @include flex(column, nowrap, 1rem);
    border: 1px solid var(--component-border-color);
    padding: 0.5rem;
  }

  // ==== //
  // INFO //
  // ==== //
  &__info {
    @include flex(row, nowrap, 0.5rem);

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
    padding: 0 0.5rem;

    &__ja {
      text-align: center;

      .ja {
        &-kk {
          font-size: 2rem;
          line-height: 2.3rem;
          color: var(--kana-kanji);
        }

        &-phs {
          .ja-h {
            color: var(--hiragana);
          }
        }
      }
    }

    &__en {
      .en-meaning {
        &::before {
          content: var(--en-symbol);
          margin-right: 0.5rem;
        }
      }
    }
  }

  // ===== //
  // LINKS //
  // ===== //
  &__link {
    @include flex(row, nowrap, 0.5rem);

    & > * {
      flex: 1 1 50%;
    }
  }
}
</style>
