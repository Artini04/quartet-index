<script setup lang="ts">
import { Icon } from '@iconify/vue'

function scrollTop() {
  scroll(0, 0)
}
</script>

<template>
  <div class="scroll__root" @click="scrollTop()">
    <Icon icon="tabler:arrow-big-up-filled" />
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.scroll {
  &__root {
    @include transition('translate');

    position: fixed;
    padding: 0.5rem;
    bottom: 0.5rem;
    right: 0;

    z-index: 999;
    color: var(--component-font-color);
    background: var(--component-background-color);
    box-shadow: -5px 0 10px -1px rgba($color: #000000, $alpha: 0.2);
    border-radius: var(--component-border-radius) 0 0 var(--component-border-radius);

    svg {
      font-size: 1.5rem;
    }

    &:is(:active) {
      translate: 0 5px;
    }

    @media screen and (width > 425px) {
      display: none;
    }
  }
}
</style>
