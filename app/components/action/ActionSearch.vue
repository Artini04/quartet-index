<script setup lang="ts">
const { search, result } = useLookup()
</script>

<template>
  <div class="action-search" role="searchbox">
    <Icon name="tabler:search" />
    <input
      v-model.lazy="search"
      type="search"
      name="search"
      id="search"
      placeholder="探す。。。ひらがな、カタカナ、漢字"
      autocomplete="off" />
    <Icon name="tabler:list-search" />
    <span>{{ result.length }}</span>
  </div>
</template>

<style lang="scss">
// PROPERTIES
$spacing: 0.6em;
$padding: 0.4em 0.6em;
$input-padding: 0.4em 0;

// COLORS
$primary: light-dark(red, root.$black-dark-00);
$primary-focus: light-dark(red, root.$black-dark-00-h);
$border: light-dark(red, root.$black-dark-00-m);
$border-focus: light-dark(red, root.$green-light-00);
$outline: light-dark(red, root.$green-light-00);
$outline-focus: light-dark(red, root.$green-light-00);

.action-search {
  padding: $padding;

  outline: 0;
  &:focus-within {
    outline: 2px solid;
  }

  & {
    @include util.flex(row, nowrap, $spacing);
    @include util.flex-align(center);
    @include util.animation("border, outline");
    @include util.with-border();
    @include util.with-focus(border-color, $border, $border-focus);
    @include util.with-focus(outline-color, $outline, $outline-focus);
  }

  & input {
    flex: 999 1;
    padding: $input-padding;

    &::placeholder {
      font-weight: 200;
    }
  }
}
</style>
