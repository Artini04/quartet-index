<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

interface Props {
  to: {
    value: string
    icon: string
    to: string
  }
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="to.to" class="tab__wrapper | button radius">
    <Icon :icon="to.icon" />
    <span>{{ to.value }}</span>
  </RouterLink>
</template>

<style lang="scss">
@import '@/assets/mixins';

.tab {
  &__wrapper {
    @include transition('background, outline, color');
    padding: 0.3rem 0.7rem 0.3rem 0.4rem;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    &:is(.router-link-active, .router-link-exact-active, :active) {
      background-color: var(--app-accent-color);
      color: var(--app-accent-font-color);
    }
  }
}
</style>
