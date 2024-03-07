<script setup lang="ts">
import 'iconify-icon'

defineProps<{ link: string; value: string }>()
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <span>{{ value }}</span>
    <iconify-icon icon="tabler:external-link" />
  </a>
</template>

<style scoped>
a > * + * {
  margin-left: 0.1rem;
}

a:is(:hover, :active) {
  color: white;
}
</style>
