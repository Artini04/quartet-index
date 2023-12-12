<script setup lang="ts">
import CardSearch from '@/components/card/CardSearch.vue'
import CardGrid from '@/components/card/CardGrid.vue'
</script>

<template>
  <main class="search">
    <CardSearch />
    <CardGrid />
  </main>
</template>

<style lang="scss">
@import '@/assets/mixins';

.search {
  @include flex(column, nowrap, 1rem);
}
</style>
