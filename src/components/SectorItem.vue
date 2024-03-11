<script setup lang="ts">
withDefaults(defineProps<{ icon?: string; indent?: boolean }>(), {
    icon: 'tabler:info-square-filled',
    indent: true
})
</script>

<template>
    <div class="sector-item | flow-wf" :indent>
        <h2 class="sector-item-header | flow-rv | align-center">
            <iconify-icon :icon width="1.1em" heigth="1.1em"></iconify-icon>
            <slot name="heading"></slot>
        </h2>
        <div class="sector-item-list | flow-wf">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
$si: sector-item;

.sector-item {
    gap: 0.8rem;
    padding: 1em;

    &[indent='true'] {
        .sector-item-list {
            margin-left: 2em;
        }
    }

    &-header {
        font-weight: 900;
    }
}
</style>
