<script setup lang="ts">
const { search, result } = useLookup()

useHead({
  title: "Lookup"
})
</script>

<template>
  <div class="lookup-view">
    <ActionSearch v-model="search" :result-count="result.length" />
    <WordResult />
  </div>
</template>

<style lang="scss">
.lookup-view {
  & > * + * {
    margin-top: 1em;
  }
}
</style>
