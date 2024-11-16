<script setup lang="ts">
import { useLookup } from "~/composables/useDictionary"

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
$com-gap: 0.6em;
$com-pad: 0.2em 0.8em;
$inp-pad: 0.4em;

// COLOR
$background-color: light-dark(black, rt.$black-01);
$border-color: light-dark(black, rt.$black-03);
$border-color-focus: light-dark(black, rt.$green-01);

.action_search {
  @include ut.with-border();
  @include ut.animation("border");

  display: flex;
  flex-flow: row nowrap;
  gap: $com-gap;
  align-items: center;

  padding: $com-pad;
  background: $background-color;
  border-color: $border-color;

  &:focus-within {
    border-color: $border-color-focus;
  }

  & input {
    padding: $inp-pad;
    flex: 999 1;

    &::placeholder {
      font-weight: 400;
    }
  }
}
</style>
