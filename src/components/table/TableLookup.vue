<script setup lang="ts">
import { table_search_query } from '@/fuse'
import InputWrapper from '../input/InputWrapper.vue'
</script>

<template>
  <div class="table-search__root | clamped">
    <InputWrapper>
      <select id="table-lesson-select" v-model.lazy="table_search_query" placeholder="OK">
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
