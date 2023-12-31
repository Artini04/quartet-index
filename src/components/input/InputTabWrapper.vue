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
  <RouterLink :to="to" class="tab | border-square">
    <Icon :icon="properties.icon" />
    <span>{{ properties.text }}</span>
  </RouterLink>
</template>

<style lang="scss">
@use '@/assets/mixins' as _mixins;

// Tab Button Color Properties
$tab-background-color-active: var(--component-input-background-color, #eee);
$tab-font-color-active: var(--component-input-font-color, #3f3f3f);

// Tab Button Properties
$padding-block: 0.2rem 0.3rem;
$padding-inline: 0.6rem;
$icon-text-spacing: 0.5rem;

.tab {
  @include _mixins.transition();
  @include _mixins.outline_active();
  @include _mixins.button_pressed(0.95);
  @include _mixins.spacing($icon-text-spacing, x);

  padding-block: $padding-block;
  padding-inline: $padding-inline;
  transition-property: scale, background, outline;

  cursor: pointer;
  user-select: none;
  text-decoration: none;

  &:is(.router-link-active, .router-link-exact-active) {
    background-color: $tab-background-color-active;
    color: $tab-font-color-active;
  }

  &:is(:focus, :focus-within) {
    outline: none !important;
  }
}
</style>
