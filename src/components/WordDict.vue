<script setup lang="ts">
import 'iconify-icon'

defineProps<{ src: string; value: string }>()
</script>

<template>
    <a :href="src" class="flow-rv | align-center subfont" target="_blank" rel="noopener noreferrer">
        <span>{{ value }}</span>
        <iconify-icon icon="tabler:external-link" />
    </a>
</template>

<style scoped>
a {
    gap: 0;
}

a > * + * {
    margin-left: 0.1rem;
}
</style>
