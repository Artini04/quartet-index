<template>
  <div class="legend">
    <h2>漢字／単語</h2>
    <div class="legend__item | border-rounded">
      <span class="symbol"> &#9670; </span>
      <span>新出漢字がある単語（読み書き）</span>
      <span>Recommended learning how to read and write</span>
    </div>
    <div class="legend__item | border-rounded">
      <span class="symbol"> &#9671; </span>
      <span>新出漢字がある単語（読みだけ） </span>
      <span>Recommended learning the reading only</span>
    </div>
    <div class="legend__item | border-rounded">
      <span class="symbol"> &#65343; </span>
      <span>新出漢字がある単語</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.legend {
  @include spacing(1rem, y, block);

  &__item {
    @include spacing(0.4rem, y, block);
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
