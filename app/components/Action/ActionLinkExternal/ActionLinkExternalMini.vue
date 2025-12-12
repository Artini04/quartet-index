<script setup lang="ts">
	interface Props {
		link: string
		label: string
		icon?: string
	}

	const { icon = "tabler:external-link" } = defineProps<Props>()
</script>

<template>
	<NuxtLink
		class="action-link-external-mini"
		:href="link"
		target="_blank"
		external
	>
		<Icon :name="icon" />
		<span>{{ label }}</span>
	</NuxtLink>
</template>

<style lang="scss">
	.action-link-external-mini {
		display: flex;
		flex-flow: row nowrap;
		gap: 0 0.5ch;
		place-items: center;
	}
</style>
