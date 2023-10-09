<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

interface Props {
  text: string
  icon: string
  to: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="to" button-type="filled" class="button radius tab__root">
    <Icon :icon="icon" />
    <span>{{ text }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.tab {
  &__root {
    padding: 0.4rem 0.6rem;
    height: fit-content;
  }
}

.router-link-active {
  background: var(--app-font-color);
  color: var(--app-background-color);
}
</style>
