<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
    <HeaderComp />
    <main>
        <RouterView />
    </main>
    <FooterComp />
</template>

<style lang="scss">
main {
    & > * + * {
        margin-top: 1em;
    }
}
</style>
