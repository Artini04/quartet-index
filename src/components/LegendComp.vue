<template>
  <div class="legend clamped">
    <span>&#9670; 新出漢字がある単語（読み書き）</span>
    <span>&#9671; 新出漢字がある単語（読みだけ）</span>
    <span>&#65343; 新出漢字</span>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.legend {
  @include display(block);
  @include margin-top(0.5rem);
}
</style>
