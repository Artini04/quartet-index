<script setup lang="ts">
// TODO: CLEANUP
import { type Word } from '@/stores'

defineProps<Word>()
</script>

<template>
  <tr class="row">
    <td class="row__new-kanji">{{ info.kanji }}</td>
    <td class="row__reading">{{ info.reading }}</td>
    <td class="row__kana-kanji">{{ data.ja_kana_kanji }}</td>

    <td class="row__reading-ja">
      <span v-if="data.ja_particle">{{ data.ja_particle }}</span>
      <span>{{ data.ja_hiragana }}</span>
      <span v-if="data.ja_suru">{{ data.ja_suru }}</span>
    </td>

    <td class="row__meaning">
      <span class="row__meaning-en">{{ data.en_meaning.join('; ') }}</span>
      <span class="row__verb-type" v-if="data.en_verb_type">{{ data.en_verb_type }}</span>
    </td>

    <td class="row__location">{{ info.letter_location }}</td>
  </tr>
</template>

<style lang="scss">
.row {
  &__verb-type {
    font-style: italic;
  }
}
</style>
