<script setup lang="ts">
import { table_results } from '@/fuse'
import TableRow from './TableRow.vue'
</script>

<template>
  <div class="table__root">
    <table class="table__wrapper">
      <thead>
        <tr>
          <th>漢</th>
          <th>読</th>
          <th>単語</th>
          <th>読み</th>
          <th>意味</th>
          <th>あ</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="{ item, refIndex } in table_results"
          :key="refIndex"
          :id="item.id"
          :data="item.data"
          :info="item.info"
        />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.table {
  &__root {
    width: 100%;
    overflow-x: auto;
    margin-inline: auto;
  }

  &__wrapper {
    display: block;
    width: fit-content;
    white-space: nowrap;
    margin-inline: auto;

    thead {
      background: var(--component-background-color);
      color: var(--component-font-color);
    }

    tr {
      th,
      td {
        padding: 0.4rem;
      }

      &:nth-child(even) {
        background-color: rgba($color: #000000, $alpha: 0.2);
      }
    }
  }
}
</style>
