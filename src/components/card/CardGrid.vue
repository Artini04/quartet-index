<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores'
import CardWord from './CardWord.vue'

const search_store = useSearchStore()
const { fuse } = storeToRefs(search_store)
</script>

<template>
  <div class="card-list" v-auto-animate>
    <CardWord
      v-for="{ item, refIndex } in fuse.results"
      :key="refIndex"
      :id="item.id"
      :data="item.data"
      :info="item.info" />
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.card-list {
  @include transition();
  @include flex(column, nowrap, 1rem);

  transition-property: margin;
}
</style>
