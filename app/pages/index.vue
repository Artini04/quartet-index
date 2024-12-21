<script setup lang="ts">
const { search, result } = useLookup()

useHead({
  title: "Lookup"
})
</script>

<template>
  <ActionSearch v-model="search" :result-count="result.length" />
  <WordResult />
</template>
