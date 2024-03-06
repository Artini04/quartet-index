<script setup lang="ts">
import 'iconify-icon'
import { RouterLink } from 'vue-router'

defineProps<{
  id: string
  variant: 'outline' | 'full' | 'full-active'
  isRouterLink: boolean
  props: {
    text: string
    icon?: string
    link: string
  }
}>()
</script>

<template>
  <RouterLink
    :to="props.link"
    class="link-button | flow-rv"
    :variant
    v-if="isRouterLink">
    <iconify-icon :icon="props.icon" v-if="props.icon"></iconify-icon>
    <span>{{ props.text }}</span>
  </RouterLink>

  <a
    :href="props.link"
    target="_blank"
    class="link-button | flow-rv"
    :variant
    v-else>
    <iconify-icon :icon="props.icon" v-if="props.icon"></iconify-icon>
    <span>{{ props.text }}</span>
  </a>
</template>

<style lang="scss">
@use '@/assets/modules/mixins' as mx;

.link-button {
  @include mx.onPress(0.95);
  @include mx.transition('scale', 200ms);

  --flow-space: 0.4rem;

  text-decoration: none;
  padding: var(--gbl-pad-1);
  border-radius: 7px;
  user-select: none;

  &[variant='full'] {
    background: var(--button-full-bg-color);
    color: var(--button-full-ft-color);
  }

  &[variant='full-active'] {
    background: transparent;
    color: inherit;
  }

  &[variant='outline'] {
    background: var(--button-outline-bg-color);
    color: var(--button-outline-ft-color);
  }
}

.router-link-active[variant='full-active'] {
  background: var(--link-bg-color-active) !important;
  color: var(--link-ft-color-active) !important;
}
</style>
