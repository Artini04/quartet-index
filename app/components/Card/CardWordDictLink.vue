<script setup lang="ts">
	interface Props {
		label: string
		link: string
	}

	defineProps<Props>()
</script>

<template>
	<NuxtLink class="card-word-dict__link" :href="link" target="_blank">
		<span>{{ label }}</span>
		<Icon name="lucide:external-link" />
	</NuxtLink>
</template>

<style lang="scss">
	.card-word-dict__link {
		color: var(--global-font-color--muted);
		text-decoration: underline;

		& > * + * {
			margin-inline-start: 0.5ch;
		}
	}
</style>
