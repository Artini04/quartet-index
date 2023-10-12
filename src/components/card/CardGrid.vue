<script setup lang="ts">
import { results } from '@/fuse'
import CardWord from './CardWord.vue'
</script>

<template>
  <div class="card-list__root" :fix="results.length <= 0" v-auto-animate>
    <CardWord
      v-for="{ item, refIndex } in results"
      :key="refIndex"
      :id="item.id"
      :data="item.data"
      :info="item.info"
    />
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.card-list {
  &__root {
    @include transition('margin');

    &[fix='true'] {
      margin-top: 0;
    }
  }
}
</style>
