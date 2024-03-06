<script setup lang="ts">
import { useLookup } from '@/components/lookup'

import CardSearch from '@/components/card/CardSearch.vue'
import CardGrid from '@/components/card/CardGrid.vue'
import SearchEntry from '@/components/action/SearchEntry.vue'
import WordCard from '@/components/WordCard.vue'

const { fuse } = useLookup()
</script>

<template>
  <main>
    <SearchEntry />
    <!-- <CardSearch /> -->

    <!-- LIST -->
    <div class="word-list | flow-wf" v-auto-animate>
      <WordCard
        v-for="{ item, refIndex } in fuse.results"
        :key="refIndex"
        :item="item" />
    </div>
  </main>
</template>

<style lang="scss"></style>
