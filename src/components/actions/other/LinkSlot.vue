<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
    <a :href="src" target="_blank" rel="noopener noreferrer">
        <slot></slot>
    </a>
</template>
