<script setup lang="ts">
import 'iconify-icon'
import { RouterLink } from 'vue-router'
import RouterSlot from './other/RouterSlot.vue'
import LinkSlot from './other/LinkSlot.vue'

interface Props {
  id: string
  variant?: 'outline' | 'full' | 'outline-active' | 'full-active'
  isRouterLink?: boolean
  value: string
  icon?: string
  src: string
}

withDefaults(defineProps<Props>(), {
  variant: 'full',
  isRouterLink: false,
})
</script>

<template>
  <component
    :is="isRouterLink ? RouterSlot : LinkSlot"
    :variant
    class="link-button | flow-rv"
    :to="isRouterLink ? src : null"
    :href="isRouterLink ? null : src"
    :target="isRouterLink ? null : '_blank'">
    <iconify-icon :icon v-if="icon"></iconify-icon>
    <span>{{ value }}</span>
  </component>
</template>

<style lang="scss">
@use '@/assets/modules/mixins' as mx;

.link-button {
  @include mx.onPress(0.95);
  @include mx.transition('scale', 200ms);

  --flow-space: 0.4rem;

  padding: var(--gbl-pad-1);
  border-radius: 7px;
  user-select: none;
  cursor: pointer;

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
