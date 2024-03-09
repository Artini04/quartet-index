<script setup lang="ts">
interface Props {
    id: string
    text: string
    value: string
}

defineProps<Props>()
const model = defineModel()
</script>

<template>
    <div class="flow-rv">
        <input type="radio" :value :id v-model="model" />
        <label :for="id">{{ text }}</label>
    </div>
</template>
