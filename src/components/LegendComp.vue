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
@use '@/assets/mixins' as _mixins;

// Legend Color Properties
$legend-border-color: var(--component-border-color);

.legend {
  @include _mixins.spacing(1rem, y, block);

  &__item {
    @include _mixins.spacing(0, y, block);
    padding: 1rem;
    border: 1px solid $legend-border-color;

    .symbol {
      text-align: center;
      font-size: 2.4rem;
      line-height: normal;
    }
  }
}
</style>
