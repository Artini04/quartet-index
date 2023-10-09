<script setup lang="ts">
import { results } from '@/fuse'
import CardWord from './CardWord.vue'
</script>

<template>
  <div class="card-list__root" v-auto-animate>
    <CardWord
      v-for="{ item, refIndex } in results"
      :key="refIndex"
      :id="item.id"
      :data="item.data"
      :info="item.info"
    />
  </div>
</template>
