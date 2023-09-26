<script setup lang="ts">
import { results } from '@/fuse'
import CardWord from './CardWord.vue'
</script>

<template>
  <div class="card-list-root" v-auto-animate>
    <CardWord
      v-for="{ item, refIndex } in results"
      :key="refIndex"
      :id="item['id']"
      :ja_letter_loc="item['info']['ja_letter_loc']"
      :ja_kk="item['data']['ja_kana_kanji']"
      :ja_h="item['data']['ja_furigana']"
      :ja_h_add="item['data']['ja_particle']"
      :ja_h_suru="item['data']['ja_suru']"
      :en="item['data']['en_meaning']"
      :en_add="item['data']['en_verb_type']"
      :kanji="item['info']['kanji']"
      :lesson="item['info']['lesson']"
      :reading="item['info']['reading']"
    />
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.card-list {
  &-root {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--component-spacing);

    @media only screen and (max-width: 451px) {
      @include flex(column, nowrap, var(--component-spacing));
    }

    @media (hover: none) {
      @include flex(column, nowrap, var(--component-spacing));
    }
  }
}
</style>
