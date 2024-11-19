<script setup lang="ts">
const { result } = useLookup()
</script>

<template>
  <div class="action-results">
    <WordCard
      v-for="{ item, refIndex, score } in result"
      :key="refIndex"
      :item
      :score
    />
  </div>
</template>

<style lang="scss">
.action-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  // @include util.flex(column, nowrap, 1em);
}
</style>
