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

  max-width: 1000px;
  margin-inline: auto;
}

@container mainRoot (width > 425px) {
  .card-list {
    &__root {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }
  }
}

@container mainRoot (width <= 425px) {
  .card-list {
    &__root {
      @include flex(column, nowrap, 1rem);
    }
  }
}
</style>
