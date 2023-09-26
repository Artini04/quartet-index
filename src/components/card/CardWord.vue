<script setup lang="ts">
import { appOptions } from '@/fuse'
import CardInfo from './word/CardInfo.vue'
import CardJapanese from './word/CardJapanese.vue'
import CardMeaning from './word/CardMeaning.vue'
import ServiceWrapper from './word/ServiceWrapper.vue'

const localProps = defineProps<{
  id: number
  ja_letter_loc: string
  ja_kk: string | null
  ja_h: string
  ja_h_add: string | null
  ja_h_suru: string | null
  en: string[]
  en_add: string | null
  kanji: string
  lesson: number
  reading: number
}>()

const jpnFirst: string = localProps['ja_kk'] ?? localProps['ja_h'],
  jpnSecond: string = localProps['ja_kk'] ? localProps['ja_h'] : '',
  meaning: string[] = localProps['en']
</script>

<template>
  <div class="card-root">
    <CardInfo :id="id" :lesson="lesson" :reading="reading" :recommended="kanji" />

    <div class="card-text">
      <CardJapanese
        :japanese_main="jpnFirst"
        :japanese_secondary="jpnSecond"
        :particle="ja_h_add"
        :suru="ja_h_suru"
      />
      <CardMeaning :meaning="meaning" :additional="en_add" />
    </div>

    <div class="card-link" v-if="appOptions['showLinks']">
      <div class="card-link-link">
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
</template>

<style lang="scss">
@import '@/assets/mixins';

.card {
  &-root {
    @include default_box;
    @include flex(column, nowrap, 1rem);
    border: 1px solid var(--component-border-color);
    position: relative;
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

      .link {
        display: block;
      }
    }
  }
}
</style>
