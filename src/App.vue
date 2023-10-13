<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import { useOptionsStore } from '@/stores/options'
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'

const options = useOptionsStore()

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', options.app_theme)
})
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>
