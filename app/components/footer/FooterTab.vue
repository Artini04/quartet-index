<script setup lang="ts">
defineProps<{ to: string; icon: string }>()
</script>
<template>
  <NuxtLink :to>
    <Icon :name="icon" />
    <span><slot /></span>
  </NuxtLink>
</template>
