<script setup lang="ts">
import 'iconify-icon'

defineProps<{ icon: string }>()
</script>

<template>
    <div>
        <iconify-icon :icon></iconify-icon>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 0.4rem;
    background: var(--theme-bg-color);
    border-radius: var(--g-bor-rad-00);
}

iconify-icon {
    vertical-align: middle;
}
</style>
