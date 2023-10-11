<script setup lang="ts">
import TableLookup from '@/components/table/TableLookup.vue'
import TableGrid from '@/components/table/TableGrid.vue'
</script>

<template>
  <main class="table__root | main">
    <div class="table__notice | clamped radius">
      <h2>Work-in-Progress</h2>
      <p>Table lookup is still unoptimized so you might experience lags when switching tabs!</p>
    </div>
    <TableLookup />
    <TableGrid />
  </main>
</template>

<style lang="scss">
.table {
  &__notice {
    background: rgb(124, 42, 42);
    padding: 1rem;
  }
}
</style>
