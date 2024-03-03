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
@use '@/assets/mixins.scss' as _mixins;

.card-list {
  @include _mixins.transition();
  @include _mixins.flex(column, nowrap, 1rem);

  max-width: 600px;
  margin-inline: auto;
  transition-property: margin;
}
</style>
