<script setup lang="ts">
interface Props {
    id: string
}

defineProps<Props>()
const model = defineModel()
</script>

<template>
    <div class="checkbox | flow-rv | align-center">
        <input type="checkbox" :id v-model="model" />
        <label class="desc | flow-wf" :for="id">
            <span class="desc-short">
                <slot name="short-desc"></slot>
            </span>
            <span class="desc-long">
                <slot name="long-desc"></slot>
            </span>
        </label>
    </div>
</template>

<style lang="scss">
.checkbox {
    gap: 1rem;
}

.desc {
    gap: 0;
    user-select: none;

    &-short {
        font-size: 1em;
        font-weight: 600;
    }

    &-long {
        font-size: 0.8em;
        color: var(--checkbox-ft-s-color);
    }
}
</style>
