<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '@/stores/lookup'

const { searchQuery, fusedQuery } = useLookup()
</script>

<template>
    <div class="search-entry | flow-rv | auto align-center">
        <iconify-icon icon="tabler:search" class="flex-sm" width="1em" height="1em"></iconify-icon>
        <input
            v-model.lazy="searchQuery"
            type="search"
            id="search-entry"
            placeholder="Search for..."
            autocomplete="off" />
        <iconify-icon
            icon="tabler:list-search"
            class="flex-sm"
            width="1em"
            height="1em"></iconify-icon>
        <span class="flex-sm">{{ fusedQuery.length }}</span>
    </div>
</template>

<style lang="scss">
.search-entry {
    $padding-block: 1rem;
    $padding-inline: 1rem;

    padding: 0 $padding-inline;
    background: var(--search-bg-color);
    color: var(--search-ft-color);
    border: 2px solid var(--search-bd-color);
    border-radius: var(--g-bor-rad-00);

    max-width: 600px;
    margin-inline: auto;

    & > input {
        padding: $padding-block 0;
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
