<script setup lang="ts">
import { useLookup } from "~/composables/useDictionary"

const { result } = useLookup()

useHead({
  title: "日本語カルテット単語索引"
})
</script>

<template>
  <main>
    <ActionSearch />
    <div class="result_grid">
      <Word v-for="{ item, refIndex } in result" :key="refIndex" :item />
    </div>
  </main>
</template>

<style lang="scss">
main {
  & > * + * {
    margin-top: 1em;
  }
}

.result_grid {
  display: flex;
  flex-flow: column nowrap;
  gap: 1em;
}
</style>
