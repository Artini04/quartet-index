<script setup lang="ts">
import 'iconify-icon'
import RouterSlot from './other/RouterSlot.vue'
import LinkSlot from './other/LinkSlot.vue'

interface Props {
    id: string
    variant?: 'outline' | 'full'
    hasActive?: boolean
    isRouterLink?: boolean
    value?: string
    icon?: string
    src: string
}

withDefaults(defineProps<Props>(), {
    variant: 'full',
    hasActive: false,
    isRouterLink: false
})
</script>

<template>
    <component
        class="button | flow-rv | align-center"
        :is="isRouterLink ? RouterSlot : LinkSlot"
        :has-active="hasActive"
        :variant
        :src>
        <iconify-icon :icon v-if="icon"></iconify-icon>
        <span>{{ value }}</span>
    </component>
</template>

<style lang="scss" scoped>
.button {
    padding: 0.4rem 0.6rem;
    border-radius: var(--g-bor-rad-00);

    &[variant='full'] {
        background: var(--button-full-bg-color);
        color: var(--button-full-ft-color);
    }

    &[variant='outline'] {
        background: var(--button-outline-bg-color);
        color: var(--button-outline-ft-color);
        border: 1px solid var(--button-outline-bd-color);
    }
}
</style>
