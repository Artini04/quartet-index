<script setup lang="ts">
import "iconify-icon"
import { useLookup } from "@/composables/useDictionary.ts"

import ActionSearch from "@/components/actions/ActionSearch.vue"
import WordCard from "@/components/WordCard.vue"

const { result } = useLookup()
</script>

<template>
  <ActionSearch />
  <div class="result_grid" v-auto-animate>
    <WordCard v-for="{ item, refIndex } in result" :key="refIndex" :item />
  </div>
</template>

<style lang="scss">
.result_grid {
  display: flex;
  flex-flow: column nowrap;
  gap: 1em;
}
</style>

<!-- <script setup lang="ts">
import "iconify-icon"
import { useLookup } from "@/composables/useDictionary.ts"
import ActionSearch from "@/components/actions/ActionSearch.vue"
import WordCard from "@/components/WordCard.vue"
import WordNoResults from "@/components/WordNoResults.vue"
import SectorItem from "@/components/SectorItem.vue"
const { fusedQuery, hasSearched } = useLookup()
</script>

<template>
  <ActionSearch />
  <div class="results-grid">
    <WordCard v-for="{ item, refIndex } in fusedQuery" :key="refIndex" :item />
    <WordNoResults v-if="fusedQuery.length <= 0 && hasSearched === true" />
  </div>
</template>

<style lang="scss">
.search-result-list {
  &[has-searched="false"] {
    display: none;
  }
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.6em;
}
</style> -->
