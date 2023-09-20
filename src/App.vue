<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style lang="scss">
#app {
  & > * + * {
    margin-top: 1rem;
  }
}
</style>
