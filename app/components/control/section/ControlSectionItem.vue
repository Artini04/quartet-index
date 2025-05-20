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

    .section-item {
        padding: 1em;
        border: var(--global-border);
        border-radius: var(--global-border-radius);

        &-content {
            margin-inline-start: 2.6em;

            &:empty {
                display: none;
            }
        }
    }

    .section-item {
        &__header-title {
            display: flex;
            place-items: center;
            text-wrap: pretty;

            @include utils.with-icon();
        }
    }
</style>
