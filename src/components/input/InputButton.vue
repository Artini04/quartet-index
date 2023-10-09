<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  variant: 'outline' | 'filled'
  text: string
  icon?: string
  src?: string
}

defineProps<Props>()
</script>

<template>
  <a
    class="button radius a__button"
    :href="src"
    :button-type="variant"
    :target="src ? '_blank' : '_parent'"
  >
    <Icon v-if="icon" :icon="icon" />
    <span>{{ text }}</span>
  </a>
</template>

<style lang="scss">
.a__button {
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  transition:
    border ease 200ms,
    background ease 200ms;

  &[button-type='outline'] {
    border: 1px solid var(--app-font-color-muted);

    &:is(:hover, :focus-within) {
      border-color: var(--app-font-color);
    }
  }

  &[button-type='filled'] {
    background: var(--app-accent-color-muted);

    &:is(:hover, :focus-within) {
      background: var(--app-accent-color);
      color: var(--app-font-inverse);
    }
  }

  @media (width <= 425px) {
    padding: 0.6rem 1.5rem;
  }
}
</style>
