<script setup lang="ts">
const { result } = useLookup()
</script>

<template>
  <main>
    <ActionSearch />

    <Preferences />

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
