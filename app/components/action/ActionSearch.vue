<script setup lang="ts">
const { search, result } = useLookup()
</script>

<template>
  <div class="action_search" role="searchbox">
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
@use "~/assets/style/modules/root" as rt;
@use "~/assets/style/modules/utilities" as ut;

// PROPERTIES
$search-item-spacing: 0.6em;
$search-item-padding: 0.2em 0.8em;
$search-input-padding: 0.4em;

.action_search {
  @include ut.flex(row, nowrap, $search-item-spacing);
  @include ut.with-border();
  @include ut.animation("border outline");
  align-items: center;

  padding: $search-item-padding;
  background: rt.$comp-background-color;
  border-color: rt.$comp-border-color;
  outline: 0;

  &:focus-within {
    outline: 2px solid rt.$comp-border-color-focus;
    border-color: rt.$comp-border-color-focus;
  }

  & input {
    padding: $search-input-padding;
    flex: 999 1;

    &::placeholder {
      font-weight: 400;
    }
  }
}
</style>
