<script lang="ts" setup>
    interface Props {
        text: string
        icon?: string
        src: string
        hideExternal?: boolean
        variant?: "ghost" | "outline"
    }

    const { hideExternal = false, variant = "ghost" } = defineProps<Props>()
</script>

<template>
    <NuxtLink
        class="action-link-external external"
        :class="{ 'external-hidden': hideExternal }"
        :to="src"
        :variant
        target="_blank"
        external
    >
        <Icon v-if="icon" :name="icon" />
        <span>{{ text }}</span>
        <Icon class="external-icon" name="tabler:arrow-up-right" />
    </NuxtLink>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/utilities" as util;

    .action-link-external {
        --text-icon-gap-size: 0em;

        text-wrap: nowrap;
        cursor: pointer;
        @include util.with-icon(var(--text-icon-gap-size));

        &.external-hidden {
            text-decoration: none !important;

            & .external-icon {
                display: none;
            }
        }
    }
</style>
