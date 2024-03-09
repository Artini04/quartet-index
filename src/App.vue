<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watchEffect } from 'vue'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

watchEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
})
</script>

<template>
    <HeaderComp />
    <RouterView />
    <FooterComp />
</template>
