<script setup lang="ts">
import { Icon } from '@iconify/vue'
import InputTabWrapper from './input/InputTabWrapper.vue'
import InputButton from './input/InputButton.vue'
</script>

<template>
  <footer class="footer__root | main">
    <div class="footer__wrapper | clamped">
      <div class="footer__p | block-y">
        <h2>「トカ」</h2>
        <p>
          Vue3と日本語を習うためにこのプロジェクトを作りました。使った言葉が「４技能でひろがる中級日本語カルテット」という本に由来しているものです。
        </p>
      </div>

      <div class="block block-y footer__link">
        <h2>リンク</h2>
        <InputButton
          variant="filled"
          text="Project Page"
          icon="tabler:brand-github-filled"
          src="https://github.com/Artini04/quartet-index"
        />

        <InputButton
          variant="filled"
          text="Report an Issue"
          icon="tabler:circle-dot"
          src="https://github.com/Artini04/quartet-index/issues"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.footer {
  &__root {
    background: var(--footer-background-color);
    padding: 3rem 1rem 1rem;
  }

  &__wrapper {
    @include flex(column, nowrap, 1.5rem);

    @media (width > 425px) {
      @include flex(row, nowrap, 1rem);
    }
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
</style>
