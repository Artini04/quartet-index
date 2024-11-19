<script setup lang="ts">
interface ActionLinkExternalProps {
  src: string
  text: string
}

defineProps<ActionLinkExternalProps>()
</script>

<template>
  <NuxtLink :to="src" class="action-link-external">
    <span>{{ text }}</span>
    <Icon name="tabler:external-link" />
  </NuxtLink>
</template>

<style lang="scss">
.action-link-external {
  text-wrap: balance;
  @include util.with-icon(0.1em);
}
</style>
