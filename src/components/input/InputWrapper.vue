<template>
  <div class="input-wrapper | border-rounded-square">
    <slot> </slot>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

$input-background-color: var(--component-wrapper-background-color, white);
$input-font-color: var(--component-wrapper-font-color, black);
$input-font-color-placeholder: var(--component-wrapper-font-color-placeholder, gray);

$inline: 0.8rem;
$block: 0.5rem;

.input-wrapper {
  @include transition();
  @include outline_active();

  padding-inline: $inline;
  transition-property: scale, outline;
  background-color: $input-background-color;
  color: $input-font-color;

  input,
  select {
    padding-block: $block;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: $input-font-color-placeholder;
    }

    &[type='button'] {
      @include transition('scale');
    }
  }

  &:has(input[type='button']) {
    @include button_pressed();
  }
}
</style>
