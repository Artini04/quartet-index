<script setup lang="ts">
const { appOptions } = useOptions()
const { appDictionary } = useLookup()
</script>

<template>
  <fieldset class="preferences">
    <legend jp>
      <Icon name="tabler:settings" />
      <span>アプリの設定</span>
    </legend>

    <ActionCheckbox
      v-model="appOptions.wordShowDicts"
      id="check-show-links"
      text="Dictionary Links"
      subtext="Show dictionary links at the bottom of the word card." />

    <ActionCheckbox
      v-model="appOptions.wordLinkDecor"
      id="check-show-decor"
      text="External Link Underline"
      subtext="Show the underline decoration from external links." />

    <ActionSelect
      v-model="appDictionary.limit"
      id="select-limit"
      text="Limit"
      subtext="Select the limit of the query.">
      <option :value="10">Default</option>
      <option :value="25">Many</option>
    </ActionSelect>
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
