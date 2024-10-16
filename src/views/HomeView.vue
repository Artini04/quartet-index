<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '@/stores/lookup'
import ActionSearch from '@/components/actions/ActionSearch.vue'
import WordCard from '@/components/WordCard.vue'
import WordNoResults from '@/components/WordNoResults.vue'
const { fusedQuery, hasSearched } = useLookup()
</script>

<template>
    <div class="controller">
        <ActionSearch />
    </div>
    <div class="results-grid">
        <WordCard v-for="{ item, refIndex } in fusedQuery" :key="refIndex" :item />
        <WordNoResults v-if="fusedQuery.length <= 0 && hasSearched === true" />
    </div>
    <!-- <main class="main-search | flow-wf">
        <ActionSearch />
        <div class="search-result-list | flow-wf" :has-searched="hasSearched" v-auto-animate>
        </div>
    </main> -->
</template>

<style lang="scss">
.search-result-list {
    &[has-searched='false'] {
        display: none;
    }
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.6em;
}
</style>
