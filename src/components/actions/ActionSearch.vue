<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '@/stores/lookup'

const { searchQuery, fusedQuery } = useLookup()
</script>

<template>
    <div class="search-entry | flow-rv | auto align-center">
        <input
            v-model.lazy="searchQuery"
            type="search"
            id="search-entry"
            placeholder="Search for..."
            autocomplete="off" />
        <iconify-icon icon="tabler:list-search" class="flex-sm"></iconify-icon>
        <span class="flex-sm">{{ fusedQuery.results.length }}</span>
    </div>
</template>

<style lang="scss">
.search-entry {
    padding: 0.4rem 0.6rem;

    background: var(--search-bg-color);
    color: var(--search-ft-color);
    border: 1px solid var(--search-bd-color);
    border-radius: var(--g-bor-rad-00);

    & > input {
        background: transparent;
        border: 0;
        outline: 0;
        min-width: 0;
        flex: 999 1 100%;

        &::placeholder {
            color: var(--search-ft-color-ph);
        }
    }
}
</style>
