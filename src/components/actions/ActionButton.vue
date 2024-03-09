<script setup lang="ts">
import 'iconify-icon'
import RouterSlot from './other/RouterSlot.vue'
import LinkSlot from './other/LinkSlot.vue'

interface Props {
    id: string
    variant?: 'outline' | 'full' | 'active'
    isRouterLink?: boolean
    value?: string
    icon?: string
    src: string
}

withDefaults(defineProps<Props>(), {
    variant: 'full',
    isRouterLink: false
})
</script>

<template>
    <component
        class="button | flow-rv | align-center"
        :is="isRouterLink ? RouterSlot : LinkSlot"
        :variant
        :src>
        <iconify-icon :icon v-if="icon" width="1em" height="1em"></iconify-icon>
        <span>{{ value }}</span>
    </component>
</template>

<style lang="scss" scoped>
.button {
    padding: 0.4rem 0.6rem;
    border-radius: var(--g-bor-rad-00);
    transition: scale ease 200ms;
    user-select: none;

    &:is(:active) {
        scale: 0.95;
    }

    &[variant='full'] {
        background: var(--button-full-bg-color);
        color: var(--button-full-ft-color);
    }

    &[variant='outline'] {
        background: var(--button-outline-bg-color);
        color: var(--button-outline-ft-color);
        border: 1px solid var(--button-outline-bd-color);
    }

    &[variant='active'] {
        background: var(--button-active-bg-color);
        color: var(--button-active-ft-color);
    }
}

.router-link-active {
    background: var(--button-active-a-bg-color) !important;
    color: var(--button-active-a-ft-color) !important;
}
</style>
