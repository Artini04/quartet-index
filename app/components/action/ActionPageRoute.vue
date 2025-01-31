<script lang="ts" setup>
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric
} from "vue-router"

const { icon = "tabler:file-symlink" } = defineProps<{
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  text: string
  icon?: string
}>()
</script>

<template>
  <NuxtLink class="action-page-route" :to>
    <Icon :name="icon" />
    <span>{{ text }}</span>
  </NuxtLink>
</template>

<style lang="scss">
@use "~/assets/styles/modules/utilities" as util;

.action-page-route {
  --base-padding: 0.6em 0.6em 0.5em;
  --base-border-radius: var(--shared-border-radius);

  padding: var(--base-padding);
  background: hsl(0, 0%, 10%);
  border-radius: var(--base-border-radius);

  @include util.use-transition("background");
  @include util.with-icon();

  &.router-link-active {
    background: hsl(0, 0%, 15%);
  }
}
</style>
