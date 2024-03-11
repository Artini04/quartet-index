<script setup lang="ts">
import 'iconify-icon'

defineProps<{ icon: string; value: string }>()
</script>

<template>
    <div class="theme-button | flow-rv | align-center">
        <iconify-icon :icon></iconify-icon>
        <span>{{ value }}</span>
    </div>
</template>

<style lang="scss" scoped>
.theme-button {
    padding: 0.4rem 0.6rem;
    border: 1px solid white;
    border-radius: var(--g-bor-rad-00);
    user-select: none;
    cursor: pointer;
}

iconify-icon {
    vertical-align: middle;
}
</style>
