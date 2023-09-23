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
  <td class="location">
    {{ ja_letter_loc }}
  </td>
  <td class="ja-kk">
    {{ ja_kk }}
  </td>
  <td class="ja-h">
    {{ ja_h }}
  </td>
  <td class="en">
    <span v-for="item in en.split(';')" :key="item">
      {{ item }}
      <span v-if="en_add">[{{ en_add }}]</span>
    </span>
  </td>
  <td class="kanji">
    {{ kanji }}
  </td>
  <td class="lesson">
    {{ lesson }}
  </td>
  <td class="reading">
    {{ reading }}
  </td>
</template>

<style lang="scss">
td {
  padding: 5px 10px;
  height: 25px;

  &.en {
    max-width: 200px;
    white-space: normal;
    & > * {
      display: block;

      + * {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
