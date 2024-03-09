<script setup lang="ts">
withDefaults(defineProps<{ icon?: string }>(), {
    icon: 'tabler:info-square-filled'
})
</script>

<template>
    <div class="sector-item | flow-wf">
        <h3 class="flow-rv | align-center">
            <iconify-icon :icon width="1.1em" heigth="1.1em"></iconify-icon>
            <slot name="heading"></slot>
        </h3>
        <div class="sector-item-list | flow-wf">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.sector-item {
    &-list {
        margin-left: 1.8em;
    }
}
</style>
