<script setup lang="ts">
	interface Props {
		link: string
		label: string
		icon?: string
	}

	const { icon = "tabler:external-link" } = defineProps<Props>()
</script>

<template>
	<NuxtLink class="action-link-external" :href="link">
		<span>{{ label }}</span>
		<Icon :name="icon" />
	</NuxtLink>
</template>

<style lang="scss">
	.action-link-external {
		display: flex inline;
		flex-flow: row nowrap;
		gap: 0 0.5ch;
		place-items: center;

		text-decoration: underline;
		width: fit-content;
		text-indent: 0; // Fix for text indentation getting inherited
	}
</style>
