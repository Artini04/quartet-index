<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { watchEffect } from 'vue'
import { useOptionsStore } from '@/stores/options'

// Component imports
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'

import InputTabWrapper from './components/input/InputTabWrapper.vue'

// Redefine store
const options = useOptionsStore()

// Sync app theme to whatever in the localStorage
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', options.app_theme)
})
</script>

<template>
  <aside>
    <HeaderComp />
    <nav class="nav">
      <InputTabWrapper
        to="/"
        :properties="{ text: 'Home', icon: 'tabler:square-rotated-filled' }" />
      <InputTabWrapper
        to="/table"
        :properties="{ text: 'Lesson Table', icon: 'tabler:table-filled' }" />
      <InputTabWrapper
        to="/options"
        :properties="{ text: 'Options', icon: 'tabler:adjustments' }" />
      <InputTabWrapper
        to="/about"
        :properties="{ text: 'About', icon: 'tabler:paperclip' }" />
    </nav>
    <FooterComp />
  </aside>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

#app {
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 900px;
  margin-inline: auto;

  & > aside {
    @include spacing(1rem, y);

    position: sticky;
    height: fit-content;
    top: 1rem;
    margin-top: 1rem;

    nav {
      @include flex(column, nowrap, 0.5rem);
    }
  }

  & > main {
    padding: 1rem;
  }
}
</style>
