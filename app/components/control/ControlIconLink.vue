<script setup lang="ts">
    interface Props {
        label: string
        icon?: string
        href: string
    }

    defineProps<Props>()
</script>

<template>
    <NuxtLink class="icon-link" :href target="_blank" external>
        <Icon v-if="icon" :name="icon" />
        <span>{{ label }}</span>
    </NuxtLink>
</template>

<style lang="scss">
    @use "~/assets/css/utils";

    .icon-link {
        @include utils.with-icon();
    }
</style>
