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
@use '@/assets/mixins.scss' as _mixins;

// Button Color Properties
$button-background-color: var(--component-input-background-color, #eee);
$button-background-color-green: var(
  --component-input-background-color-green,
  #90ee90
);
$button-background-color-yellow: var(
  --component-input-background-color-yellow,
  #ffff6f
);
$button-background-color-red: var(
  --component-input-background-color-red,
  #ce4747
);
$button-font-color: var(--component-input-font-color, #3f3f3f);
$button-font-color-inverse: var(--component-input-font-color-inverse, #eee);

// Button Properties
$padding-block: 0.2rem 0.3rem;
$padding-inline: 0.6rem;
$icon-text-spacing: 0.4rem;

.input-button {
  @include _mixins.transition();
  @include _mixins.button_pressed();
  @include _mixins.spacing($icon-text-spacing, x);

  padding-block: $padding-block;
  padding-inline: $padding-inline;
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
    background: #ce4747;
    color: $button-font-color-inverse !important;
  }
}
</style>
