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
      :ja_letter_loc="item['ja-letter-loc']"
      :ja_kk="item['ja-kk'] ?? null"
      :ja_h="item['ja-h']"
      :ja_h_add="item['ja-h-add'] ?? null"
      :ja_h_suru="item['ja-h-suru'] ?? null"
      :en="item['en']"
      :en_add="item['en-add'] ?? null"
      :kanji="item['kanji']"
      :lesson="parseInt(item['lesson'])"
      :reading="parseInt(item['reading'])"
    />
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.card-list {
  &-root {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    @media only screen and (max-width: 451px) {
      @include flex(column, nowrap, 1rem);
    }

    @media (hover: none) {
      @include flex(column, nowrap, 1rem);
    }
  }
}
</style>
