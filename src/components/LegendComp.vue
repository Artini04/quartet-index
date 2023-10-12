<template>
  <div class="legend__root | block-y">
    <div class="legend__item | block block-y radius">
      <span class="symbol"> &#9670; </span>
      <span>新出漢字がある単語（読み書き）</span>
      <span>Recommended learning how to read and write</span>
    </div>
    <div class="legend__item | block block-y radius">
      <span class="symbol"> &#9671; </span>
      <span>新出漢字がある単語（読みだけ） </span>
      <span>Recommended learning the reading only</span>
    </div>
    <div class="legend__item | block block-y radius">
      <span class="symbol"> &#65343; </span>
      <span>新出漢字がある単語</span>
    </div>
  </div>
</template>

<style lang="scss">
.legend {
  &__item {
    padding: 1rem;
    border: 1px solid var(--component-border-color);

    .symbol {
      text-align: center;
      font-size: 2.4rem;
      line-height: normal;
    }
  }
}
</style>
