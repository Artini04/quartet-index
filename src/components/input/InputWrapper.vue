<template>
  <div class="input-wrapper remove-highlight">
    <slot name="input"></slot>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.input-wrapper {
  background-color: var(--component-background-color);
  border-radius: var(--component-border-radius);
  padding: 0 var(--component-padding);

  &:is(:focus-within, :focus) {
    outline: 1px solid white;
  }

  &:has(input[type='button']) {
    @include default_transition;
    transition-property: background, scale;
  }

  &:has(input[type='button']:is(:active)) {
    scale: 0.95;
  }
}
</style>
