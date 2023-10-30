<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTableSearchStore } from '@/stores'
import InputWrapper from '../input/InputWrapper.vue'

const table_store = useTableSearchStore()
const { search_query } = storeToRefs(table_store)
</script>

<template>
  <div class="table-search | clamped">
    <InputWrapper>
      <select id="table-lesson-select" v-model.lazy="search_query" placeholder="OK">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </InputWrapper>
  </div>
</template>

<style>
.table-search {
  display: block;
  margin-inline: auto;
}
</style>
