<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  variant: 'outline' | 'filled'
  color?: 'green' | 'yellow' | 'red'
  properties: {
    text: string
    icon?: string
    src?: string
  }
}

defineProps<Props>()
</script>

<template>
  <a
    class="input-button | border-square"
    :href="properties.src"
    target="_blank"
    :variant="variant"
    :button-color="color">
    <Icon :icon="properties.icon" v-if="properties.icon" />
    <span v-html="properties.text"></span>
  </a>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

$button-background-color: var(--component-input-background-color, #eee);
$button-background-color-green: var(--component-input-background-color-green, #90ee90);
$button-background-color-yellow: var(--component-input-background-color-yellow, #ffff6f);
$button-background-color-red: var(--component-input-background-color-red, #ec4f4f);
$button-font-color: var(--component-input-font-color, #3f3f3f);
$button-font-color-inverse: var(--component-input-font-color-inverse, #eee);

$padding-block: 0.3rem;
$padding-inline: 0.6rem;
$icon-text-spacing: 0.5rem;

.input-button {
  @include transition();
  @include spacing($icon-text-spacing, x);
  @include button_pressed();

  padding: $padding-block $padding-inline;
  transition-property: outline, scale;

  cursor: pointer;
  user-select: none;
  text-decoration: none;
  background: $button-background-color;
  color: $button-font-color !important;

  span {
    word-wrap: break-word;
    word-break: break-all;
  }

  // Button coloring
  &[button-color='green'] {
    background: $button-background-color-green;
  }

  &[button-color='yellow'] {
    background: $button-background-color-yellow;
  }

  &[button-color='red'] {
    background: $button-background-color-red;
    color: $button-font-color-inverse !important;
  }
}
</style>
