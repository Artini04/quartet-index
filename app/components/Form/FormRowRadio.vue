<script setup lang="ts">
	interface Props {
		id: string
		label: string
		value: string
	}

	defineProps<Props>()
	const model = defineModel()
</script>

<template>
	<FormRow>
		<input :id v-model="model" type="radio" :name="id" :value />
		<label :for="id">{{ label }}</label>
	</FormRow>
</template>
