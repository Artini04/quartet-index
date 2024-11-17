<script setup lang="ts">
interface ButtonProps {
  id: string
  text: string
  icon: string
  opt: Partial<OtherProperties>
}

interface OtherProperties {
  isReversed: boolean
  isWarning: boolean
  isAlert: boolean
  isAccent: boolean
}

defineProps<Partial<ButtonProps>>()
</script>

<template>
  <button
    :id
    class="action-button"
    :class="{
      isAlert: opt?.isAlert,
      isWarning: opt?.isWarning,
      isAccent: opt?.isAccent
    }"
    type="button">
    <template v-if="opt?.isReversed">
      <span v-if="text">{{ text }}</span>
      <Icon :name="icon" v-if="icon" />
    </template>

    <template v-else>
      <Icon :name="icon" v-if="icon" />
      <span v-if="text">{{ text }}</span>
    </template>
  </button>
</template>

<style lang="scss">
// PROPERTIES
$padding: 0.4em 0.6em;

// COLORS
$border: light-dark(red, root.$black-dark-00-m);
$border-focus: light-dark(red, root.$black-dark-00-h);
$primary: light-dark(red, root.$black-dark-00);
$primary-focus: light-dark(red, root.$black-dark-00-m);
$alert: light-dark(red, root.$red-dark-00);
$alert-focus: light-dark(red, root.$red-dark-00-h);
$warning: light-dark(red, root.$yellow-dark-00);
$warning-focus: light-dark(red, root.$yellow-dark-00-h);
$accent: light-dark(red, root.$green-dark-00);
$accent-focus: light-dark(red, root.$green-dark-00-h);

.action-button {
  padding: $padding;
  cursor: pointer;
  text-wrap: balance;
  width: 100%;

  & {
    @include util.animation("background, border");
    @include util.with-icon();
    @include util.with-border();
    @include util.with-hover(border-color, $border, $border-focus);
  }

  &:not(&.isAlert, &.isWarning, &.isAccent) {
    @include util.with-hover(background, $primary, $primary-focus);
  }

  &.isWarning {
    @include util.with-hover(background, $warning, $warning-focus);
  }

  &.isAlert {
    @include util.with-hover(background, $alert, $alert-focus);
  }

  &.isAccent {
    @include util.with-hover(background, $accent, $accent-focus);
  }
}
</style>
