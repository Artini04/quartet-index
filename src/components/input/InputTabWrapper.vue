<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

interface Props {
  to: string
  properties: {
    text: string
    icon: string
  }
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="to"
    class="tab | border-square">
    <Icon :icon="properties.icon" />
    <span>{{ properties.text }}</span>
  </RouterLink>
</template>

<style lang="scss">
@import '@/assets/mixins';

$tab-background-color-active: var(--component-input-background-color, #eee);
$tab-font-color-active: var(--component-input-font-color, #3f3f3f);

$padding-block: 0.3rem;
$padding-inline: 0.6rem;
$icon-text-spacing: 0.5rem;

.tab {
  @include transition();
  @include outline_active();
  @include button_pressed(0.95);
  @include spacing($icon-text-spacing, x);

  padding: $padding-block $padding-inline;
  transition-property: scale, outline;

  cursor: pointer;
  user-select: none;
  text-decoration: none;

  // Remove touch feedback highlight
  -webkit-tap-highlight-color: transparent;

  &:is(.router-link-active, .router-link-exact-active) {
    background-color: $tab-background-color-active;
    color: $tab-font-color-active;
  }

  &:is(:focus, :focus-within) {
    outline: none !important;
  }
}
</style>
