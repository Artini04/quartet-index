<script setup lang="ts">
import { useLookup } from '../lookup'
import CardWord from './CardWord.vue'

const { fuse } = useLookup()
</script>

<template>
  <div class="card-list">
    <CardWord
      v-for="{ item, refIndex } in fuse.results"
      :key="refIndex"
      :id="item.id"
      :data="item.data"
      :info="item.info" />
  </div>
</template>

<style lang="scss">
@use '@/assets/modules/composition' as cm;

.card-list {
  @include cm.spaced($gap: 1rem);
}
</style>
