<script setup lang="ts">
import { debugLinks } from '@/fuse'
import { Icon } from '@iconify/vue'

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
  <div class="card-word__root">
    <div class="card-word__info shade">
      <span class="goto-lesson" :vol="lesson >= 7 ? 2 : 1">Lesson {{ lesson }}</span>
      <span class="goto-reading">読み{{ reading }}</span>
      <span class="kanji-learn-recommend">
        {{ kanji === 0 ? '&#65343;' : kanji == 2 ? '&#9670;' : '&#9671;' }}
      </span>
    </div>

    <div class="card-word__text">
      <div class="card-word__text-japanese" lang="jp">
        <span class="ja-kk" v-for="item in jpnFirst" :key="item">
          {{ item }}
        </span>
        <div class="ja-phs">
          <span class="ja-particle" v-if="ja_h_add">{{ `[${ja_h_add}]` }}</span>
          <span class="ja-h" v-for="item in jpnSecond" :key="item">
            {{ item }}
          </span>
          <span v-if="ja_h_suru" class="ja-suru">({{ ja_h_suru }})</span>
        </div>
      </div>

      <div class="card-word__text-meaning">
        <span class="en-en" v-for="item in enMain" :key="item">
          {{ item }}
          <span class="en-verb-type" v-if="en_add"> [{{ en_add }}] </span>
        </span>
      </div>
    </div>

    <div class="card-word__link shade" v-if="debugLinks">
      <div class="card-word__link-link">
        <span class="service">
          <Icon icon="tabler:book-2" />
          jpdb.io
        </span>
        <span class="link" v-for="item in [...jpnFirst, ...jpnSecond]" :key="item">
          <a :href="`https://jpdb.io/search?q=${item}#a`" target="_blank">{{
            item.length > 4 ? item.slice(0, 4) + '...' : item
          }}</a>
        </span>
      </div>

      <div class="card-word__link-link">
        <span class="service">
          <Icon icon="tabler:book-2" />
          weblio辞書
        </span>
        <span class="link" v-for="item in [...jpnFirst, ...jpnSecond]" :key="item">
          <a :href="`https://ejje.weblio.jp/content/${item}`" target="_blank">{{
            item.length > 4 ? item.slice(0, 4) + '...' : item
          }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-word {
  $card-bordering-corner-radius: 7px;
  $card-spacing-from-border-to-data: 1rem;
  $card-meaning-spacing-left: 20px;

  &__root {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;

    padding: $card-spacing-from-border-to-data;
    border: 1px solid var(--card-border-color, #f3f3f3);
    border-radius: $card-bordering-corner-radius;
  }

  &__info {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;

    align-items: center;
    justify-content: center;

    .goto {
      &-lesson,
      &-reading {
        flex: 1 1 50%;
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

    .word-id {
      flex: 0 0 40px;
      font-family: monospace;
    }
  }

  &__text {
    flex-grow: 1;
    padding: 0 $card-spacing-from-border-to-data;

    & > * {
      display: block;

      & + * {
        margin-top: 0.3rem;
      }
    }

    &-japanese {
      text-align: center;

      .ja {
        &-kk {
          font-size: 2rem;
          line-height: 2.3rem;
          color: var(--kana-kanji, #f16d45);
        }

        &-h {
          font-size: 1.3rem;
          line-height: 1.6rem;
        }

        &-phs {
          & > * + * {
            margin-left: 0.5rem;
          }
        }
      }
    }

    &-meaning {
      .en {
        &-en {
          display: block;

          &::before {
            content: var(--en-symbol);
            margin-right: 0.5rem;
          }
        }

        &-verb-type {
          font-style: italic;
        }
      }
    }
  }

  &__link {
    display: flex;
    flex-flow: row nowrap;
    gap: 0;
    font-size: 0.9rem;

    .service {
      line-height: 1.4rem;
    }

    &-link {
      flex: 1 1 50%;

      & > * {
        display: block;
        & + * {
          margin-top: 0.3rem;
        }
      }
    }
  }
}
</style>
