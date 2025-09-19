<script setup lang="ts">
	interface Props {
		href: string
		icon: string
		text?: string
	}

	defineProps<Props>()
</script>

<template>
	<NuxtLink class="action-link-external-mini" :href target="_blank" external>
		<Icon :name="icon" />
		<span>{{ text }}</span>
	</NuxtLink>
</template>

<style lang="scss">
	@use "~/assets/css/utils";

	.action-link-external-mini {
		@include utils.with-icon();
	}
</style>
