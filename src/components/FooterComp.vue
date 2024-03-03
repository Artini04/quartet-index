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
            src: 'https://github.com/Artini04/quartet-index',
          }" />

        <InputButtonWrapper
          variant="filled"
          :properties="{
            text: 'Issues / Suggestions',
            icon: 'tabler:circle-dot',
            src: 'https://github.com/Artini04/quartet-index/issues',
          }" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as _mixins;

// Footer Color Properties
$footer-background-color: var(--component-box-background-color);

// Footer Properties
$footer-spacing: 0.5rem;

.footer {
  // Container properties
  container-type: inline-size;
  container-name: footerRoot;

  // Styles

  &__wrapper {
    @include _mixins.flex(column, nowrap, $footer-spacing);

    background: $footer-background-color;
    padding: 1rem;
  }

  &__link {
    @include _mixins.spacing($footer-spacing, y, block);
  }

  &__p,
  &__link {
    flex: 1 1 50%;
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
