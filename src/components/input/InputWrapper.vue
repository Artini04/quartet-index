<template>
  <div class="input__wrapper | radius">
    <slot> </slot>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

$inline: 0.8rem;
$block: 0.6rem;

.input__wrapper {
  @include transition('scale');
  @include outline-active();
  background-color: var(--component-background-color);
  color: var(--component-font-color);
  padding-inline: $inline;

  input,
  select {
    padding-block: $block;
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color: transparent;

    &::placeholder {
      color: var(--app-font-color-muted);
    }

    &[type='button'] {
      @include transition('scale');

      &:is(:active) {
        @include button_pressed();
      }
    }
  }

  // &:is(:focus-within) {
  //   outline: 1px solid var(--component-outline-color);
  // }

  svg {
    font-size: 1.4rem;
    margin-bottom: -0.1rem;
  }
}
</style>
