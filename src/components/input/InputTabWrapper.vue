<template>
  <div class="tab-wrapper transition-bg-color">
    <slot name="button"> </slot>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.tab-wrapper {
  @include default_transition;
  transition-property: background, color;
  border-radius: var(--component-border-radius);
  width: fit-content;

  &:has(.router-link-active, .router-link-exact-active) {
    background-color: var(--component-active-tab-background-color);
    color: var(--component-active-tab-font-color);
  }

  a {
    @include no_outline;
    @include tab(0.3rem 0.5rem);
  }

  svg {
    @include svg(18px);
  }
}
</style>
