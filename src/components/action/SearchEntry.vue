<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '../lookup'

const { search_query, fuse } = useLookup()
</script>

<template>
  <div class="search-entry | flow-rv-fx flow-auto">
    <iconify-icon icon="tabler:list-search" class="flow-shrink"></iconify-icon>
    <input
      v-model.lazy="search_query"
      type="search"
      name="search-entry"
      id="search-entry"
      placeholder="Search for..."
      autocomplete="off" />
    <iconify-icon icon="tabler:arrow-back" class="flow-shrink"></iconify-icon>
    <span class="flow-shrink">{{ fuse.results.length }}</span>
  </div>
</template>

<style lang="scss">
.search-entry {
  align-items: center;
  padding: var(--gbl-pad-0);

  background: var(--search-bg-color);
  color: var(--search-ft-color);

  border: 1px solid var(--search-bd-color);
  border-radius: var(--gbl-bor-rad);

  & > input {
    background: transparent;
    min-width: 0;
    flex: 999 1 100%;

    &::placeholder {
      color: var(--search-ft-color-ph);
    }
  }
}
</style>
