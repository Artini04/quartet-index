<script setup lang="ts">
import 'iconify-icon'
import { Icon } from '@iconify/vue'
import { useSearchStore } from '@/stores'
import { storeToRefs } from 'pinia'

// Component Imports
import InputWrapper from '../input/InputWrapper.vue'

const search_store = useSearchStore()
const { search_query, fuse } = storeToRefs(search_store)
</script>

<template>
  <div class="search-entry">
    <InputWrapper role="searchbox">
      <iconify-icon icon="tabler:list-search"></iconify-icon>

      <input
        type="search"
        name="search-query"
        placeholder="Search for..."
        autocomplete="off"
        v-model.lazy="search_query" />

      <iconify-icon icon="tabler:arrow-back"></iconify-icon>
      <span>{{ fuse.results.length }}</span>
    </InputWrapper>
  </div>
</template>

<style lang="scss">
.search-entry {
  display: block;
  width: 100%;
}
</style>
