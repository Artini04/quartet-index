<script setup lang="ts">
import { resultsTable } from '@/fuse'
import CardTable from '@/components/CardTable.vue'
import TableRow from '@/components/TableRow.vue'
</script>

<template>
  <main>
    <CardTable />
    <div class="search-table-outer wrapper">
      <table class="search-table-main inner">
        <thead>
          <tr>
            <td>あ</td>
            <td>Kana-Kanji</td>
            <td>Furigana</td>
            <td>Meaning</td>
            <td>Learn?</td>
            <td>Lesson</td>
            <td>Reading</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ item, refIndex } in resultsTable" :key="refIndex">
            <TableRow
              :id="item['id']"
              :ja_letter_loc="item['ja-letter-loc']"
              :ja_kk="item['ja-kk'] ?? null"
              :ja_h="item['ja-h']"
              :ja_h_add="item['ja-h-add'] ?? null"
              :ja_h_suru="item['ja-h-suru'] ?? null"
              :en="item['en']"
              :en_add="item['en-add'] ?? null"
              :kanji="item['kanji']"
              :lesson="parseInt(item['lesson'])"
              :reading="parseInt(item['reading'])"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style lang="scss">
.search-table {
  &-main {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  &-outer {
    overflow: hidden;
  }
}
</style>
