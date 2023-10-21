<script setup lang="ts">
import { Icon } from '@iconify/vue'

function scrollTop() {
  scroll(0, 0)
}
</script>

<template>
  <div class="scroll__root | radius" @click="scrollTop()">
    <Icon icon="tabler:arrow-big-up-filled" />
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.scroll {
  &__root {
    @include transition('translate, visibility');

    float: right;
    position: sticky;
    padding: 1rem;
    bottom: 4rem;
    width: fit-content;

    text-align: center;
    color: var(--component-font-color);
    background: var(--component-background-color);
    // box-shadow: 0 0 40px 50px rgba($color: #000000, $alpha: 0.5);

    svg {
      font-size: 1.8rem;
    }

    &:is(:active) {
      translate: 0 5px;
    }

    &[visible='false'] {
      visibility: hidden;
    }

    @media screen and (width > 425px) {
      display: none;
    }
  }
}
</style>
