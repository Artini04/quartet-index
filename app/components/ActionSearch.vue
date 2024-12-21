<script setup lang="ts">
interface Props {
  resultCount: number
}

defineProps<Props>()
const inputModel = defineModel({ type: String })
</script>

<template>
  <label class="action-search" for="action-search">
    <Icon name="tabler:search" />
    <input
      v-model.lazy="inputModel"
      type="search"
      id="action-search"
      placeholder="ひらがな, カタカナ, 漢字, 英語を探す..."
      autocomplete="off" />
    <Icon name="tabler:filter" />
    <span>{{ resultCount }}</span>
  </label>
</template>

<style lang="scss">
$base-padding: 0.6em;

.action-search {
  display: inline-block;
  padding: $base-padding;
  cursor: text;
  border: 1px solid hsl(230, 8%, 25%);
  border-radius: 7px;
  transition: ease-in-out 200ms;
  transition-property: outline;
  @include util.use-flex(row, nowrap, 0.6em);
  @include util.use-align(center, center);

  &:is(:active, :focus-visible, :focus-within) {
    outline: 2px solid white;
  }

  & input {
    min-width: 0;
    flex: 99 1;
  }
}
</style>
