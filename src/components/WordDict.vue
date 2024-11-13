<script setup lang="ts">
import "iconify-icon"

defineProps<{ src: string; value: string }>()
</script>

<template>
  <a :href="src" target="_blank" rel="noopener noreferrer">
    <span>{{ value }}</span>
    <iconify-icon icon="tabler:external-link" />
  </a>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  vertical-align: middle;
  & > * + * {
    margin-left: 0.2em;
  }
}
</style>
