<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  variant: 'outline' | 'filled'
  properties: {
    value: string
    icon?: string
    src?: string
  }
}

defineProps<Props>()
</script>

<template>
  <a
    class="button radius a__button"
    :href="properties.src"
    :button-type="variant"
    :target="properties.src ? '_blank' : '_parent'"
  >
    <Icon v-if="properties.icon" :icon="properties.icon" />
    <span>{{ properties.value }}</span>
  </a>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.a__button {
  @include transition('border, scale, outline');
  @include outline_active();
  @include button_pressed();

  padding: 0.3rem 0.6rem 0.4rem;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &[button-type='outline'] {
    border: 1px solid var(--app-font-color-muted);

    &:is(:hover, :focus-within) {
      border-color: var(--app-font-color);
    }
  }

  &[button-type='filled'] {
    background: var(--app-accent-color);
    color: var(--app-accent-font-color);
  }
}
</style>
