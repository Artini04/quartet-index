<script setup lang="ts">
import CardSearch from '@/components/card/CardSearch.vue'
import CardGrid from '@/components/card/CardGrid.vue'
</script>

<template>
  <main class="main__root | main">
    <CardSearch />
    <CardGrid />
  </main>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.main__root {
  container-type: inline-size;
  container-name: mainRoot;
}

@container mainRoot (width > 425px) {
  .card-list {
    &__root {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 0.5rem;
    }
  }
}

@container mainRoot (width <= 425px) {
  .card-list {
    &__root {
      @include flex(column, wrap, 0.5rem);
    }
  }
}
</style>
