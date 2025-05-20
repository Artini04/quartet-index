<script setup lang="ts">
    interface Props {
        label: string
        href: string
        icon?: string
    }

    const { icon = "tabler:arrow-up-right" } = defineProps<Props>()
</script>

<template>
    <NuxtLink class="external-link" :href target="_blank" external>
        <span>{{ label }}</span>
        <Icon :name="icon" />
    </NuxtLink>
</template>

<style lang="scss">
    .external-link {
        & .iconify {
            margin-block-end: -0.2em;

            @supports not (margin-block: 0) {
                margin-bottom: -0.2em;
            }
        }
    }
</style>
