<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import { useOptionsStore } from '@/stores/options'

// Component imports
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'

// Redefine store
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
