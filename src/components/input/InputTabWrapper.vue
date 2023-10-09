<template>
  <div class="tab__wrapper | radius">
    <slot name="button"> </slot>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.tab {
  &__wrapper {
    @include default_transition;
    transition-property: background, color;

    &:has(.router-link-active, .router-link-exact-active) {
      background-color: var(--app-font-color);
      color: var(--app-background-color);
    }

    a {
      @include no_outline;
      @include tab(0.3rem 0.5rem);
    }

    svg {
      @include svg(18px);
    }
  }
}
</style>
