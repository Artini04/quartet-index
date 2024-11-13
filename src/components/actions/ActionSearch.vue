<script setup lang="ts">
import "iconify-icon"
import { useLookup } from "@/composables/useDictionary"

const { search, result } = useLookup()
</script>

<template>
  <div class="action_searchbox" role="searchbox">
    <iconify-icon icon="tabler:search" />
    <input
      v-model.lazy="search"
      type="search"
      id="search-input"
      placeholder="Search for..."
      autocomplete="off" />
    <iconify-icon icon="tabler:list-search" />
    <span>{{ result.length }}</span>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/modules/root" as rt;

// == PROPERTIES ==
$com-padding: 0.4em 1em;
$com-gap: 0.4em;
$inp-padding: 0.2em;

// == COLOR ==
$placeholder-color: light-dark(rgba(black, 0.2), rgba(white, 0.2));
$background-color: light-dark(black, rt.$black-10);
$border-color: light-dark(rgba(black, 0.2), rt.$black-gray);
$border-color-focus: light-dark(steelblue, steelblue);

// == ANIMATION ==
$animation-duration: 200ms;

.action_searchbox {
  display: flex;
  flex-flow: row nowrap;
  gap: $com-gap;
  align-items: center;
  padding: $com-padding;
  background: $background-color;

  & input {
    padding: $inp-padding;
    flex: 999 1 100%;

    &::placeholder {
      color: $placeholder-color;
      font-weight: 200;
      font-style: italic;
    }
  }

  // Border
  border: rt.$border-thick solid $border-color;
  border-radius: rt.$border-radius;
  transition: border ease $animation-duration;

  &:is(:focus-within) {
    border: rt.$border-thick solid $border-color-focus;
  }
}
</style>
