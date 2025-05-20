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
    @use "~/assets/css/utils";

    .external-link {
        @include utils.with-icon($spacing: 0, $alignment: 0.1em);
    }
</style>
