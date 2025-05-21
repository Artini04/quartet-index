<script setup lang="ts">
    interface Props {
        id: string
        text: string
        subtext?: string
    }

    defineProps<Props>()
    const checkModel = defineModel<boolean>()
</script>

<template>
    <label class="checkbox" :for="id">
        <input :id v-model="checkModel" type="checkbox" />

        <div v-if="subtext" class="checkbox-content">
            <span class="checkbox__text">{{ text }}</span>
            <span class="checkbox__subtext">{{ subtext }}</span>
        </div>
        <p v-else>{{ text }}</p>
    </label>
</template>

<style lang="scss">
    .checkbox {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.6em;
        user-select: none;

        &-content {
            &:has(:not(:only-child)) {
                display: flex;
                flex-flow: column nowrap;
            }
        }
    }

    .checkbox {
        &__subtext {
            font-size: var(--global-font-size-small);
            color: var(--global-font-color-dim);
        }
    }
</style>
