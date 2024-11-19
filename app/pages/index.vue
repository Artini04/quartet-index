<script setup lang="ts">
useHeadSafe({
  title: "Home"
})
</script>

<template>
  <main>
    <ActionSearch />
    <OptionPreferences />
    <ActionResults />
  </main>
</template>

<style lang="scss">
main {
  @include util.space(margin-top, 1em);
}
</style>
