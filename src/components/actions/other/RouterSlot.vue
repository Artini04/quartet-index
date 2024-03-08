<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ src: string }>()
</script>

<template>
    <RouterLink :to="src">
        <slot></slot>
    </RouterLink>
</template>
