<script lang="ts" setup>
interface Props {
  to: string
  icon: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink class="action-link-route" :to>
    <Icon :name="icon" />
    <span>{{ text }}</span>
  </NuxtLink>
</template>

<style lang="scss">
$base-padding: 0.6em;

.action-link-route {
  display: inline-block;
  padding: $base-padding;
  background: hsl(0, 0%, 15%);
  border-radius: 7px;
  @include util.with-icon();
}
</style>
