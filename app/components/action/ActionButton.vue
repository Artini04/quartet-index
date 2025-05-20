<script lang="ts" setup>
    interface Props {
        id: string
        text?: string
        icon?: string
    }

    defineProps<Props>()
</script>

<template>
    <button :id class="action-button">
        <Icon v-if="icon" :name="icon" />
        <span v-if="text">{{ text }}</span>
    </button>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/utilities" as util;

    .action-button {
        cursor: pointer;
        @include util.with-icon();
    }
</style>
