<template>
  <div class="action">
    <div class="action__element">
      <slot name="element" />
    </div>
    <slot name="label" />
  </div>
</template>

<style lang="scss">
@use "@/assets/style/modules/root" as rt;
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$action-spacing: 0.6em;
$action-label-spacing: 0;

.action {
  @include ut.flex(row, nowrap, $action-spacing);
  align-items: center;

  & > * {
    cursor: pointer;
  }

  & > label {
    @include ut.space(margin-top, $action-label-spacing);
    flex: 1 1;

    span {
      display: block;
    }
  }
}
</style>
