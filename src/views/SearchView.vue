<script setup lang="ts">
import CardSearch from '@/components/CardSearch.vue'
import CardGrid from '@/components/CardGrid.vue'
</script>

<template>
  <main>
    <CardSearch />
    <CardGrid />
  </main>
</template>

<style lang="scss">
main {
  & > * + * {
    margin-top: var(--skeleton-spacing);
  }

  width: calc(100% - 2rem);
  max-width: 1000px;
  margin-inline: auto;
}
</style>
