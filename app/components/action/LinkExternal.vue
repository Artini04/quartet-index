<script setup lang="ts">
const { text = "[external link]" } = defineProps<{
  src: string
  text?: string
}>()
</script>

<template>
  <NuxtLink
    class="action-link-external"
    :to="src"
    target="_blank"
    rel="external nofollow noopener">
    <span>{{ text }}</span>
    <Icon name="tabler:external-link" />
  </NuxtLink>
</template>

<style lang="scss">
.action-link-external {
  @include util.with-icon(0.1em);
}
</style>
