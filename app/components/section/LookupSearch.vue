<script lang="ts" setup>
const { search, result } = storeToRefs(useLookupStore())
</script>

<template>
  <div class="lookup-search">
    <label class="lookup-search__search-box" for="lookup-searchbox">
      <Icon name="tabler:search" />
      <input
        id="lookup-searchbox"
        v-model.lazy="search"
        type="search"
        placeholder="ひらがな, カタカナ, 漢字, 英語を探す..."
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false" />
      <Icon name="tabler:filter-search" />
      <span>{{ result.length }}</span>
    </label>
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/modules/layouts";
@use "~/assets/styles/modules/utilities" as util;

.lookup-search {
  @extend %grid;
}

.lookup-search__search-box {
  @extend %grid-content;

  --flex-wrap: nowrap;
  --flex-gap: 0.6em;

  @extend %flex;
  align-items: center;

  --base-padding: 0.6em 0.6em 0.5em;
  --base-border-radius: var(--shared-border-radius);

  --base-border: hsl(0, 0%, 23%);

  border: 1px solid var(--base-border);
  border-radius: var(--base-border-radius);
  padding: var(--base-padding);

  cursor: text;
  outline: 0;

  @include util.use-transition("outline, border");

  & > input {
    min-width: 0;
    flex: 99 1 auto;
  }

  &:is(:active, :focus-visible, :focus-within) {
    outline: 2px solid white;
    border: 1px solid white;
  }
}
</style>
