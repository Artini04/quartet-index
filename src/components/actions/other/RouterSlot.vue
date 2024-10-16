<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ src: string }>()
</script>

<template>
    <RouterLink :to="src">
        <slot></slot>
    </RouterLink>
</template>

<style lang="scss">
.router-link-active {
    background: var(--button-active-a-bg-color) !important;
    color: var(--button-active-a-ft-color) !important;
}
</style>
