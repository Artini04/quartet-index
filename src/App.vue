<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { app_theme } from './fuse'

import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'

onMounted(() => {
  document.documentElement.setAttribute('data-theme', app_theme.value)
})
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>
