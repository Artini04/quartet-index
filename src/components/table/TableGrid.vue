<script setup lang="ts">
import { resultsTable } from '@/fuse'
import TableRow from './TableRow.vue'
</script>

<template>
  <div class="table-wrapper">
    <table class="table-root">
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
          v-for="{ item, refIndex } in resultsTable"
          :key="refIndex"
          :id="item['id']"
          :ja_letter_loc="item['info']['ja_letter_loc']"
          :ja_kk="item['data']['ja_kana_kanji']"
          :ja_h="item['data']['ja_furigana']"
          :ja_h_add="item['data']['ja_particle']"
          :ja_h_suru="item['data']['ja_suru'] ?? null"
          :en="item['data']['en_meaning']"
          :en_add="item['data']['en_verb_type']"
          :kanji="item['info']['kanji']"
          :reading="item['info']['reading']"
        />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.table {
  &-wrapper {
    width: 100%;
    overflow-x: auto;
    margin-inline: auto;
  }

  &-root {
    display: block;
    width: fit-content;
    white-space: nowrap;

    thead {
      background-color: rgba($color: #000000, $alpha: 0.2);
    }

    tr {
      td,
      th {
        padding: 0.4rem 0.6rem;
      }
    }

    tr:nth-child(even) {
      background-color: rgba($color: #000000, $alpha: 0.2);
    }
  }
}
</style>
