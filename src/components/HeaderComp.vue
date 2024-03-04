<script setup lang="ts">
import 'iconify-icon'
import InputTabWrapper from './input/InputTabWrapper.vue'

import LinkButton from './action/LinkButton.vue'
</script>

<template>
  <header>
    <div class="header-title">
      <h1>「トカ」Pocket Vocabulary Index</h1>
    </div>
    <div class="link-selector">
      <LinkButton
        id="home"
        :props="{ text: 'Lookup', icon: 'tabler:table-filled' }"
        link="/" />
      <LinkButton
        id="home"
        :props="{ text: 'Options', icon: 'tabler:settings' }"
        link="/options" />
      <LinkButton
        id="home"
        :props="{ text: 'About', icon: 'tabler:paperclip' }"
        link="/about" />
    </div>
  </header>

  <header class="header | clamped text-center">
    <div class="header__title">
      <h1>「トカ」Pocket Quartet</h1>
      <h2>日本語カルテット単語索引</h2>
    </div>

    <nav class="nav">
      <div class="nav__left">
        <InputTabWrapper
          to="/"
          :properties="{
            text: 'Lookup',
            icon: 'tabler:square-rotated-filled',
          }" />
        <InputTabWrapper
          to="/table"
          :properties="{ text: 'Lesson', icon: 'tabler:table-filled' }" />
      </div>

      <div class="nav__right">
        <InputTabWrapper
          to="/options"
          :properties="{ text: 'Options', icon: 'tabler:adjustments' }" />
        <InputTabWrapper
          to="/about"
          :properties="{ text: 'About', icon: 'tabler:paperclip' }" />
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@use '@/assets/mixins' as _mixins;
@use '@/assets/modules/composition' as cm;

// Header Color Properties
$header-border-color: var(--component-header-border-color, #3a3f4d);

// Header Properties
$padding-block: 2rem 1rem;
$padding-inline: 1rem;

header {
  @include cm.spaced();

  width: min(100dvw - 3rem, 500px);
  margin-inline: auto;
}

.link-selector {
  @include cm.spaced('block', 0.2rem);
}

// .header {
//   padding-block: $padding-block;
//   padding-inline: $padding-inline;
//   border-bottom: 1px solid $header-border-color;

//   &__title {
//     h1 {
//       font-size: 1.4rem;
//       line-height: 1.3rem;
//     }

//     h2 {
//       font-size: 1.3rem;
//     }
//   }
// }

// .nav {
//   width: 100%;

//   &__left,
//   &__right {
//     @include _mixins.inline_flex(row, wrap, 0.1rem 0.3rem);
//     width: 50%;
//   }

//   &__left {
//     @include _mixins.item_alignment(center, flex-start);
//   }

//   &__right {
//     @include _mixins.item_alignment(center, flex-end);
//   }
// }
</style>
