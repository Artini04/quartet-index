<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useSearchStore } from '@/stores'
import { storeToRefs } from 'pinia'
import InputWrapper from '../input/InputWrapper.vue'

const search_store = useSearchStore()
const { search_query, fuse } = storeToRefs(search_store)
</script>

<template>
  <div class="search-search | clamped">
    <InputWrapper role="searchbox">
      <Icon icon="tabler:list-search" />

      <input
        type="search"
        name="search-query"
        placeholder="Search for..."
        autocomplete="off"
        v-model.lazy="search_query" />

      <Icon icon="tabler:arrow-back" />
      <span>{{ fuse.results.length }}</span>
    </InputWrapper>
  </div>
</template>

<style>
.search-search {
  display: block;
  width: 100%;
}
</style>
