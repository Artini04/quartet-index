<script setup lang="ts">
	interface Props {
		icon?: string
		title: string
	}

	const { icon = "tabler:notebook" } = defineProps<Props>()
</script>

<template>
	<div class="section-item">
		<h2 class="section-item-header | jp">
			<Icon class="section-item__icon" :name="icon" />
			<span class="section-item__title">{{ title }}</span>
		</h2>

		<div class="section-item-content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
	.section-item {
		& > * + * {
			margin-block-start: 0.4em;
		}

		&-header {
			display: flex;
			gap: 0 1ch;
		}

		&-content {
			margin-inline-start: 2.4em;
		}

		&__icon {
			font-size: 1.2em;
		}

		&__title {
			letter-spacing: 0.1em;
		}
	}
</style>
