<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTableSearchStore } from '@/stores'

// Component Import/s
import TableRow from './TableRow.vue'

// TODO: CLEANUP CODE AND CSS

const table_store = useTableSearchStore()
const { table_results } = storeToRefs(table_store)
</script>

<template>
  <div class="table | radius border-rounded">
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
        <TableRow v-for="{ item, refIndex } in table_results" :key="refIndex" :id="item.id" :data="item.data"
          :info="item.info" />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
$table-component-border-color: var(--component-border-color);

.table {
  display: block;
  width: 100%;
  overflow-x: auto;
  margin-inline: auto;

  &__wrapper {
    display: block;
    width: fit-content;
    white-space: nowrap;
    margin-inline: auto;

    thead {
      background: var(--component-background-color);
      color: var(--component-font-color);

      tr {
        background-color: rgba($color: #000000, $alpha: 0.2);
      }
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

  @media only screen and (width <=425px) {
    border: 1px solid $table-component-border-color;
  }
}
</style>
