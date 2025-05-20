<script lang="ts" setup>
    import type {
        RouteLocationAsPathGeneric,
        RouteLocationAsRelativeGeneric,
    } from "vue-router"

    const { icon = "tabler:file-symlink" } = defineProps<{
        to?:
            | string
            | RouteLocationAsRelativeGeneric
            | RouteLocationAsPathGeneric
        text: string
        icon?: string
    }>()
</script>

<template>
    <NuxtLink class="action-page-route" :to>
        <Icon :name="icon" />
        <span>{{ text }}</span>
    </NuxtLink>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/utilities" as util;

    .action-page-route {
        --base-padding: 0.6em 0.6em 0.5em;
        --base-border-radius: var(--shared-border-radius);

        --base-background: hsl(0, 0%, 12%);
        --base-background-active: hsl(0, 0%, 18%);

        padding: var(--base-padding);
        background: var(--base-background);
        border-radius: var(--base-border-radius);

        @include util.use-transition("background, scale");
        @include util.with-icon();

        &:is(:active) {
            scale: 0.9;
        }

        &.router-link-active {
            background: var(--base-background-active);
        }
    }
</style>
