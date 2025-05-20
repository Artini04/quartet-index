<script setup lang="ts">
    interface Props {
        headerIcon?: string
        headerTitle: string
    }

    const { headerIcon = "tabler:notebook" } = defineProps<Props>()
</script>

<template>
    <section class="section-item">
        <div class="section-item-header">
            <h2 class="section-item__header-title">
                <Icon :name="headerIcon" />
                <span>{{ headerTitle }}</span>
            </h2>
        </div>

        <div class="section-item-content">
            <slot />
        </div>
    </section>
</template>

<style lang="scss">
    @use "~/assets/css/utils";
    @use "~/assets/css/layers";

    .section-item {
        padding: 1em;
        border: var(--global-border);
        border-radius: var(--global-border-radius);
        @include layers.flow($space-size: 0.4em);

        &-content {
            &:empty {
                display: none;
            }
        }
    }

    .section-item {
        &__header-title {
            text-wrap: pretty;
            @include utils.with-icon();
        }
    }
</style>
