<script setup lang="ts">
defineProps<{
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
</script>

<template>
  <tr>
    <td>
      {{ kanji === 0 ? '&#65343;' : kanji === 2 ? '&#9670;' : '&#9671;' }}
    </td>
    <td class="lesson">
      {{ lesson }}
    </td>
    <td class="reading">
      {{ reading }}
    </td>
    <td class="ja-kk">
      {{ ja_kk }}
    </td>
    <td class="tb-reading">
      <span v-if="ja_h_add">[{{ ja_h_add }}]</span>
      <span>{{ ja_h }}</span>
      <span v-if="ja_h_suru">({{ ja_h_suru }})</span>
    </td>
    <td class="tb-meaning">
      <div v-for="item in en.split(';')" :key="item">
        <span class="tb-meaning-en">{{ item }} </span>
        <span class="tb-meaning-add" v-if="en_add">[{{ en_add }}]</span>
      </div>
    </td>
    <td class="location">
      {{ ja_letter_loc }}
    </td>
  </tr>
</template>

<style lang="scss">
@import '@/assets/mixins';

.tb {
  &-reading {
    @include display(inline-block);
    @include margin-left(0.5rem);
  }

  &-meaning {
    @include margin-top(0.5rem);

    &-en {
      &::before {
        content: '\1F534';
        margin-right: 0.5rem;
      }
    }

    &-add {
      font-style: italic;
    }
  }
}
</style>
