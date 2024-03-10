<script setup lang="ts">
withDefaults(defineProps<{ icon?: string }>(), {
    icon: 'tabler:info-square-filled'
})
</script>

<template>
    <div class="sector-item | flow-wf">
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
.sector-item {
    gap: 0.8rem;
    padding: 1em;

    &-list {
        margin-left: 2em;
    }

    &-header {
        font-weight: 900;
    }
}
</style>
