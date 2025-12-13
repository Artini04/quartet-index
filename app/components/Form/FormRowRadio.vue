<script setup lang="ts">
	interface Props {
		id: string
		label: string
		value: string
		selected?: boolean
	}

	const { selected = false } = defineProps<Props>()
	const model = defineModel()
</script>

<template>
	<FormRow>
		<input type="radio" :name="id" :id :value v-model="model" />
		<label :for="id">{{ label }}</label>
	</FormRow>
</template>
