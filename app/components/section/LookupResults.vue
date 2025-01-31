<script lang="ts" setup>
const { result } = storeToRefs(useLookupStore())
</script>

<template>
  <div class="lookup-results">
    <div v-auto-animate class="lookup-results__grid">
      <WordCard v-for="{ item } in result" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/modules/layouts";
@use "~/assets/styles/modules/utilities" as util;

.lookup-results {
  @extend %grid;
}

.lookup-results__grid {
  @extend %grid-content;

  --grid-item: 350px;
  --grid-gap: 1em;

  @extend %grid-box;

  @include util.use-break(600px) {
    --grid-item: 200px;
  }
}
</style>
