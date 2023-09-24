<script setup lang="ts">
import { appOptions } from '@/fuse'
import ServiceWrapper from './card/ServiceWrapper.vue'
import CardMeaning from './card/CardMeaning.vue'
import CardJapanese from './card/CardJapanese.vue'

const localProps = defineProps<{
  id: number
  ja_letter_loc: string
  ja_kk: string | null
  ja_h: string
  ja_h_add: string | null
  ja_h_suru: string | null
  en: string
  en_add: string | null
  kanji: number
  lesson: number
  reading: number
}>()

const jpnFirst: string[] = [],
  jpnSecond: string[] = []

if (localProps['ja_kk']) {
  jpnFirst.push(...localProps['ja_kk'].split(';'))
  jpnSecond.push(...localProps['ja_h'].split(';'))
} else {
  jpnFirst.push(...localProps['ja_h'].split(';'))
}

const enMain: string[] = localProps['en'].split(';')
</script>

<template>
  <div class="card-word-root">
    <div class="card-word-info">
      <span class="word-id">{{ id }}</span>
      <span class="goto-lesson" :vol="lesson >= 7 ? 2 : 1">Lesson {{ lesson }}</span>
      <span class="goto-reading">読み{{ reading }}</span>
      <span class="kanji-learn-recommend">
        {{ kanji === 0 ? '&#65343;' : kanji == 2 ? '&#9670;' : '&#9671;' }}
      </span>
    </div>

    <div class="card-word-text">
      <CardJapanese
        :japanese_main="jpnFirst"
        :japanese_secondary="jpnSecond"
        :particle="ja_h_add"
        :suru="ja_h_suru"
      />
      <CardMeaning :meaning="enMain" :additional="en_add" />
    </div>

    <div class="card-word-link" v-if="appOptions['showLinks']">
      <div class="card-word-link-link">
        <ServiceWrapper icon_name="tabler:book-2" text="jpdb.io" />
        <span class="link" v-for="item in [...jpnFirst, ...jpnSecond]" :key="item">
          <a :href="`https://jpdb.io/search?q=${item}#a`" target="_blank">
            {{ item.length > 4 ? item.slice(0, 4) + '...' : item }}
          </a>
        </span>
      </div>

      <div class="card-word-link-link">
        <ServiceWrapper icon_name="tabler:book-2" text="weblio辞書" />
        <span class="link" v-for="item in [...jpnFirst, ...jpnSecond]" :key="item">
          <a :href="`https://ejje.weblio.jp/content/${item}`" target="_blank">
            {{ item.length > 4 ? item.slice(0, 4) + '...' : item }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.card-word {
  &-root {
    @include default_box;
    @include flex(column, nowrap, 1rem);
    border: 1px solid var(--component-border-color);
    position: relative;
  }

  &-info {
    @include flex(row, nowrap, 1rem);
    @include item_alignment(center, center);
    @include box(0.5rem);
    background-color: rgba($color: #000000, $alpha: 0.2);

    .goto {
      &-lesson,
      &-reading {
        flex-grow: 1;
      }

      &-lesson {
        &[vol='1'] {
          color: var(--book-vol-1, #ff677c);
        }

        &[vol='2'] {
          color: var(--book-vol-2, #50b0ff);
        }
      }

      &-reading {
        text-align: right;
      }
    }

    .kanji-learn-recommend {
      flex-shrink: 1;
    }

    .word-id {
      flex: 0 1 40px;
      font-family: monospace;
      text-align: center;
      background-color: #3f3f3f;
      border-radius: var(--component-border-radius);
    }
  }

  &-text {
    @include margin-top(0.5rem);
    flex-grow: 1;
    padding: 0 0.5rem;
  }

  &-link {
    @include flex(row, nowrap, 0);
    @include box(0.5rem);
    background-color: rgba($color: #000000, $alpha: 0.2);

    .service {
      @include svg(18px);
    }

    &-link {
      @include margin_top(0.3rem);
      flex: 1 1 50%;
    }
  }
}
</style>
