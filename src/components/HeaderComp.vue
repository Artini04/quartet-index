<script setup lang="ts">
import InputTabWrapper from './input/InputTabWrapper.vue'
</script>

<template>
  <header class="header | clamped">
    <div class="header__title | block text-center">
      <h1>「トカ」Pocket Quartet</h1>
      <h2>日本語カルテット単語索引</h2>
    </div>

    <nav class="nav">
      <div class="nav__left">
        <InputTabWrapper
          to="/"
          :properties="{ text: 'Lookup', icon: 'tabler:square-rotated-filled' }" />
        <InputTabWrapper
          to="/table"
          :properties="{ text: 'Lesson', icon: 'tabler:table-filled' }" />
      </div>

      <div class="nav__right">
        <InputTabWrapper
          to="/options"
          :properties="{ text: 'Options', icon: 'tabler:settings-filled' }" />
        <InputTabWrapper to="/about" :properties="{ text: 'About', icon: 'tabler:paperclip' }" />
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import '@/assets/mixins';

$header-border: var(--component-header-border-color, #3a3f4d);

$padding-block: 2rem;
$padding-inline: 1rem;

.header {
  padding: $padding-block $padding-inline calc($padding-block / 2);
  border-bottom: 1px solid $header-border;

  &__title {
    h1 {
      font-size: 1.4rem;
      line-height: 1.3rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
}

.nav {
  &__left,
  &__right {
    @include inline_flex(row, wrap, 0.1rem 0.3rem);
    width: 50%;
  }

  &__left {
    @include item_alignment(center, flex-start);
  }

  &__right {
    @include item_alignment(center, flex-end);
  }
}
</style>
