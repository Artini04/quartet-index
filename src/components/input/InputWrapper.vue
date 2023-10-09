<template>
  <div class="input__wrapper | radius">
    <slot> </slot>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.input__wrapper {
  @include flex(row, nowrap, 0.4rem);
  @include item_alignment(center, center);
  @include transition('scale');
  background-color: var(--component-background-color);
  padding-inline: 0.8rem;

  input {
    padding-block: 0.6rem;
    width: 100%;
    -webkit-tap-highlight-color: transparent;

    &::placeholder {
      color: var(--app-font-color-muted);
    }
  }

  &:is(:focus-within) {
    outline: 1px solid white;
  }
}
</style>
