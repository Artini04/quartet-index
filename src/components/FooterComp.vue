<script setup lang="ts">
import InputButtonWrapper from './input/InputButtonWrapper.vue'
</script>

<template>
  <footer class="footer | border-rounded-square">
    <div class="footer__p">
      <h2>「トカ」</h2>
      <p>日本語カルテットの学ぶために小さな単語索引のアプリ。</p>
    </div>

    <div class="footer__link">
      <h2>リンク</h2>

      <InputButtonWrapper
        variant="filled"
        :properties="{
          text: 'Project Page',
          icon: 'tabler:brand-github-filled',
          src: 'https://github.com/Artini04/quartet-index'
        }" />

      <InputButtonWrapper
        variant="filled"
        :properties="{
          text: 'Report an Issue',
          icon: 'tabler:circle-dot',
          src: 'https://github.com/Artini04/quartet-index/issues'
        }" />
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

$footer-background-color: var(--component-box-background-color);
$links-spacing: 0.7rem;

.footer {
  @include spacing(1rem, y, block);
  background: $footer-background-color;
  padding: 1rem;

  &__link {
    @include spacing($links-spacing, y, block);
  }
}
</style>
