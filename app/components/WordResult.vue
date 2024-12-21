<script lang="ts" setup>
const { result } = useLookup()
</script>

<template>
  <div class="word-result" v-auto-animate>
    <WordCard
      v-for="{ item, refIndex } in result"
      :key="item.id"
      v-bind="item" />
  </div>
</template>

<style lang="scss">
.word-result {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
}
</style>
