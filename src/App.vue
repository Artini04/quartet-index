<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import ToTop from './components/ToTop.vue'
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
  <ToTop />
</template>
