<script setup lang="ts">
import 'iconify-icon'
import type { Component } from 'vue'

interface ActionButtonProps {
    is: Component
    variant?: 'full' | 'outline'

    id: string
    label: string
    icon?: string
    src?: string
}

const { variant = 'full' } = defineProps<ActionButtonProps>()
</script>

<template>
    <component class="action-button" :is :src :variant>
        <iconify-icon :icon v-if="icon" />
        <span>{{ label }}</span>
    </component>
</template>

<style lang="scss">
// PROPERTIES
$cmp-spacing: 0.6em 0.4em;
$cmp-border-radius: 7px;
$cmp-animation-duration: 200ms;

// PROPERTIES COLOR
$cmp-full-color: var(--button-full-bg-color);
$cmp-full-f-color: var(--button-full-ft-color);

$cmp-outline-color: #fff;
$cmp-outline-f-color: #fff;

.action-button {
    padding: $cmp-spacing;
    border-radius: $cmp-border-radius;
    vertical-align: middle;

    cursor: pointer;
    user-select: none;
    line-height: 1.2em;

    // Animation
    transition: scale ease $cmp-animation-duration;
    &:is(:active) {
        scale: 0.95;
    }

    // Flow
    & > * + * {
        margin-left: 0.4em;
    }

    // Variants
    &[variant='full'] {
        background: $cmp-full-color;
        color: $cmp-full-f-color;
        border: 1px solid $cmp-full-color;
    }

    &[variant='outline'] {
        background: transparent;
        color: $cmp-outline-f-color;
        border: 1px solid $cmp-outline-color;
    }
}
</style>
