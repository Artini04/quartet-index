<template>
  <div class="input-tab-wrapper">
    <slot name="button"> </slot>
  </div>
</template>

<style lang="scss">
.input-tab-wrapper {
  display: inline-block;
  border-radius: var(--component-border-radius);
  width: fit-content;

  transition:
    background ease 200ms,
    color ease 200ms;

  &:has(.router-link-active, .router-link-exact-active) {
    background-color: var(--component-input-tab-active);
    color: var(--component-input-tab-active-font);
  }

  a {
    outline: none !important;
    display: block;
    padding: 0.4rem 0.6rem;
    text-decoration: none;
  }

  svg {
    $size: 18px;

    display: inline-block;
    margin-bottom: -(calc($size / 6));
    margin-right: calc($size / 6);
    width: $size;
    height: $size;
  }
}
</style>
