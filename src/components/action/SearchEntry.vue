<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '../lookup'

const { search_query, fuse } = useLookup()
</script>

<template>
  <div class="search-entry">
    <iconify-icon icon="tabler:list-search"></iconify-icon>
    <input
      v-model.lazy="search_query"
      type="search"
      name="search-entry"
      id="search-entry"
      placeholder="Search for..."
      autocomplete="off" />
    <iconify-icon icon="tabler:arrow-back"></iconify-icon>
    <span>{{ fuse.results.length }}</span>
  </div>
</template>

<style lang="scss">
@use '@/assets/modules/composition' as cm;
@use '@/assets/modules/colors';

.search-entry {
  @include cm.spaced($direction: 'inline', $gap: 0.4rem, $auto: true);
  align-items: center;
  padding: 0.5rem 0.8rem;
  border-radius: 7px;

  background: var(--search-bg-color);
  color: var(--search-ft-color);
  border: 1px solid var(--search-bd-color);

  & > * {
    flex: 1 1 10px;
  }

  & > input {
    background: transparent;
    min-width: 0;
    flex: 99 1 100%;

    &::placeholder {
      color: var(--search-ft-color-ph);
    }
  }
}
</style>
