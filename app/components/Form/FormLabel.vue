<script setup lang="ts">
	interface Props {
		label: string
		icon: string
	}

	defineProps<Props>()
</script>

<template>
	<p class="form-label">
		<Icon :name="icon" />
		<span>{{ label }}</span>
	</p>
</template>

<style lang="scss">
	.form-label {
		display: flex;
		flex-flow: row nowrap;
		place-items: center;
		gap: 0 0.5ch;

		.iconify {
			margin-block-end: 0.1em;
		}
	}
</style>
