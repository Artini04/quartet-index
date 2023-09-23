<template>
  <div class="input-wrapper remove-highlight">
    <slot name="input"></slot>
  </div>
</template>

<style lang="scss">
.input-wrapper {
  background-color: var(--component-input-bg);
  border-radius: var(--component-border-radius);
  padding: 0 var(--component-padding);

  &:is(:focus-within, :focus) {
    outline: 1px solid white;
  }

  &:has(input[type='button']) {
    transition:
      background ease 200ms,
      scale ease 100ms;
  }

  &:has(input[type='button']:is(:active)) {
    scale: 0.95;
  }
}
</style>
