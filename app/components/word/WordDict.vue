<script setup lang="ts">
interface Prop {
  src: string
  value: string
}
defineProps<Prop>()
</script>

<template>
  <a :href="src">
    <span>{{ value }}</span>
    <Icon name="tabler:external-link" mb />
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  vertical-align: middle;
}

a > * + * {
  margin-left: 0.2em;
}
</style>
