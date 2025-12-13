<script setup lang="ts">
	interface Props {
		link: string
		label: string
		icon?: string
	}

	const { icon = "lucide:notebook-text" } = defineProps<Props>()
</script>

<template>
	<NuxtLink class="index-page-link" :to="link">
		<Icon :name="icon" />
		<span>{{ label }}</span>
	</NuxtLink>
</template>

<style lang="scss">
	@use "~/assets/css/utils";

	.index-page-link {
		display: flex;
		flex-flow: row nowrap;
		place-items: center;
		gap: 0 0.5ch;

		padding: 0.2em 0.6em;
		border: var(--global-border);
		border-radius: var(--global-border-radius);

		user-select: none;
		font-size: 0.9em;

		@include utils.use-transition("rotate");
		@include utils.on-hover() {
			rotate: 5deg;
		}
	}
</style>
