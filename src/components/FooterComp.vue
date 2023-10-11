<script setup lang="ts">
import InputButton from './input/InputButton.vue'
</script>

<template>
  <footer class="footer__root | main">
    <div class="footer__wrapper | clamped">
      <div class="footer__p | block-y">
        <h2>「トカ」</h2>
        <p>日本語カルテットの学ぶために小さな単語索引のアプリ</p>
      </div>

      <div class="block block-y footer__link">
        <h2>リンク</h2>
        <InputButton
          variant="filled"
          :properties="{
            value: 'Project Page',
            icon: 'tabler:brand-github-filled',
            src: 'https://github.com/Artini04/quartet-index'
          }"
        />

        <InputButton
          variant="filled"
          :properties="{
            value: 'Report an Issue',
            icon: 'tabler:circle-dot',
            src: 'https://github.com/Artini04/quartet-index/issues'
          }"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.footer {
  &__root {
    container-type: inline-size;
    container-name: footerRoot;

    background: var(--app-accent-color-muted);
    padding: 2rem 1rem 4rem;
  }

  &__wrapper {
    @include flex(column, nowrap, 1.5rem);
  }

  &__link {
    flex: 1 1 200px;

    @media (width <= 425px) {
      flex-basis: 100px;
    }
  }

  &__p {
    flex: 1 1 70%;
  }
}

@container footerRoot (width > 425px) {
  .footer {
    &__wrapper {
      flex-direction: row;
    }
  }
}
</style>
