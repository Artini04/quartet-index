<script setup lang="ts">
import InputButtonWrapper from './input/InputButtonWrapper.vue'
</script>

<template>
  <footer class="footer | clamped">
    <div class="footer__wrapper | border-rounded-square">
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
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

$footer-background-color: var(--component-box-background-color);
$links-spacing: 0.7rem;

.footer {
  container-type: inline-size;
  container-name: footerRoot;

  &__wrapper {
    @include flex(column, nowrap, 0.5rem);

    background: $footer-background-color;
    padding: 1rem;
  }

  &__link {
    @include spacing($links-spacing, y, block);

    height: fit-content;
    overflow: hidden;
  }

  &__p {
    flex: 1 1 60%;
  }
}

@container footerRoot (width > 425px) {
  .footer {
    &__wrapper {
      flex-direction: row;
      gap: 1rem;
    }
  }
}
</style>
