<script setup lang="ts">
useSeoMeta({
  title: "日本語カルテット単語索引",
  ogTitle: "日本語カルテット単語索引",
  description: "Japanese Quartet Vocabulary Index made with Vue3",
  ogDescription: "Japanese Quartet Vocabulary Index made with Vue3"
})
</script>

<template>
  <NuxtLayout name="sidebar">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 100ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
