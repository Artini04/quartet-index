<script setup lang="ts"></script>

<template>
  <fieldset class="preferences">
    <legend jp>
      <Icon name="tabler:settings" />
      <span>アプリの設定</span>
    </legend>
  </fieldset>
</template>

<style lang="scss">
@use "~/assets/style/modules/root" as rt;
@use "~/assets/style/modules/utilities" as ut;

// PROPERTIES
$prefer-padding: 0.4em 0.6em;
$prefer-spacing: 0.6em;
$prefer-legend-padding: 0.6em;

.preferences {
  @include ut.with-border();
  @include ut.space(margin-top, $prefer-spacing);

  border-color: rt.$comp-border-color;
  background: rt.$comp-background-color;
  padding: $prefer-padding;

  & legend {
    @include ut.with-icon();
    background: linear-gradient(
      0deg,
      rt.$comp-background-color 70%,
      transparent 100%
    );
    padding-inline: $prefer-legend-padding;

    & + * {
      margin-top: -$prefer-padding / 2;
    }
  }
}
</style>
