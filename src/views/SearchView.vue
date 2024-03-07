<script setup lang="ts">
import { useLookup } from '@/components/lookup'
import { useOptionsStore } from '@/stores'
import SearchEntry from '@/components/action/SearchEntry.vue'
import WordCard from '@/components/WordCard.vue'
import CheckboxInput from '@/components/action/CheckboxInput.vue'

const { fuse } = useLookup()
const options = useOptionsStore()
</script>

<template>
  <main>
    <SearchEntry />

    <div>
      <CheckboxInput
        id="show-links"
        value="Show dictionary links in card"
        v-model="options.cardShowLinks" />
    </div>

    <div class="word-list | flow-wf" v-auto-animate>
      <WordCard
        v-for="{ item, refIndex } in fuse.results"
        :key="refIndex"
        :item="item" />
    </div>
  </main>
</template>

<style lang="scss"></style>
