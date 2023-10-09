<script setup lang="ts">
import { appOptions, type Word } from '@/fuse'
import ServiceWrapper from './word/ServiceWrapper.vue'

const localProps = defineProps<Word>()

const jpnFirst: string = localProps.data.ja_kana_kanji ?? localProps.data.ja_furigana
const jpnSecond: string = localProps.data.ja_kana_kanji ? localProps.data.ja_furigana : ''
const meaning: string[] = localProps.data.en_meaning
</script>

<template>
  <div class="card__root | radius" v-once>
    <div class="card__info | shade">
      <span class="card__info__id | radius">{{ id }}</span>
      <span class="card__info__lesson" :vol="info.lesson < 7 ? 1 : 2">
        Lesson {{ info.lesson }}
      </span>
      <span class="card__info__reading">{{ info.reading }}</span>
      <span class="card__info__new-kanji">{{ info.kanji }}</span>
    </div>

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

    <div class="card__link | shade">
      <div class="card__link__box" v-if="appOptions['cardOptions']['showLinks']">
        <div class="card__link__box__link">
          <ServiceWrapper icon_name="tabler:book-2" text="jpdb.io" />
          <span class="link" v-for="item in [jpnFirst, jpnSecond]" :key="item">
            <a :href="`https://jpdb.io/search?q=${item}#a`" target="_blank">
              {{ item.length > 4 ? item.slice(0, 4) + '...' : item }}
            </a>
          </span>
        </div>

        <div class="card-link-link">
          <ServiceWrapper icon_name="tabler:book-2" text="weblio辞書" />
          <span class="link" v-for="item in [jpnFirst, jpnSecond]" :key="item">
            <a :href="`https://ejje.weblio.jp/content/${item}`" target="_blank">
              {{ item.length > 4 ? item.slice(0, 4) + '...' : item }}
            </a>
          </span>
        </div>
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
  }

  // &-link {
  //   @include flex(row, nowrap, 0);
  //   @include box(0.5rem);
  //   background-color: rgba($color: #000000, $alpha: 0.2);

  //   .service {
  //     @include svg(18px);
  //   }

  //   &-link {
  //     @include margin_top(0.3rem);
  //     flex: 1 1 50%;

  //     .link {
  //       display: block;
  //     }
  //   }
  // }
}
</style>
