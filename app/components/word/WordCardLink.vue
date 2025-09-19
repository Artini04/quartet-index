<script setup lang="ts">
	interface Props {
		href: string
	}

	defineProps<Props>()
</script>

<template>
	<NuxtLink class="word-card-link" :href target="_blank" external>
		<slot />
		<Icon name="tabler:external-link" />
	</NuxtLink>
</template>

<style lang="scss">
	.word-card-link {
		& > * + * {
			margin-inline-start: 0.4em;
		}
	}
</style>
