<script setup lang="ts">
import InputTabButton from './input/InputTabButton.vue'
</script>

<template>
  <header class="header__root | main">
    <div class="header__wrapper | block-y clamped">
      <div class="block header__title | text-center">
        <h1>「トカ」Pocket Quartet</h1>
        <h2>日本語カルテット単語索引</h2>
      </div>

      <nav class="header__nav">
        <div class="header__nav-left">
          <InputTabButton :to="{ value: 'Lookup', icon: 'tabler:books', to: '/' }" />
          <InputTabButton
            :to="{ value: 'Lesson Table', icon: 'tabler:table-filled', to: '/table' }"
          />
        </div>

        <div class="header__nav-right">
          <InputTabButton :to="{ value: 'Options', icon: 'tabler:adjustments', to: '/options' }" />
          <InputTabButton :to="{ value: 'About', icon: 'tabler:paperclip', to: '/about' }" />
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/mixins';

.header {
  &__root {
    padding: 2rem 1rem 1rem;
    border-bottom: 1px solid var(--app-accent-color-muted);
    // box-shadow: 0 0 10px rgba($color: #181818, $alpha: 0.5);
  }

  &__title {
    h1 {
      font-size: 1.4rem;
      line-height: 1.2rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }

  &__nav {
    &-left,
    &-right {
      @include inline_flex(row, wrap, 0.1rem 0.3rem);
      width: 50%;
    }

    &-left {
      @include item_alignment(center, flex-start);
    }

    &-right {
      @include item_alignment(center, flex-end);
    }
  }
}
</style>
