<template>
  <div class="input-wrapper | border-rounded-square">
    <slot> </slot>
  </div>
</template>

<style lang="scss">
@use '@/assets/mixins' as _mixins;

$input-background-color: var(--component-wrapper-background-color, white);
$input-font-color: var(--component-wrapper-font-color, black);
$input-font-color-placeholder: var(
  --component-wrapper-font-color-placeholder,
  gray
);

$inline: 0.8rem;
$block: 0.5rem;

.input-wrapper {
  @include _mixins.transition();
  @include _mixins.outline_active();
  @include _mixins.flex(row, nowrap, 0.3rem);
  @include _mixins.item_alignment(center, flex-start);

  padding-inline: $inline;
  transition-property: scale, outline;
  background-color: $input-background-color;
  color: $input-font-color;

  input,
  select {
    padding-block: $block;
    width: 100%;

    &::placeholder {
      color: $input-font-color-placeholder;
    }

    &[type='button'] {
      @include _mixins.transition('scale');
    }
  }

  &:has(input[type='button']) {
    @include _mixins.button_pressed();
  }
}
</style>
