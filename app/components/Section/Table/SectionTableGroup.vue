<script setup lang="ts">
	interface Props {
		groupKey: string | number
	}

	defineProps<Props>()

	const isOpen = ref(false)
</script>

<template>
	<div class="table-group" :data-key="groupKey">
		<div class="table-group-heading" @click="isOpen = !isOpen">
			<h4>{{ groupKey }}</h4>
		</div>

		<div
			class="table-group-content"
			:class="{ 'table-group-content--open': isOpen }"
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
	.table-group {
		border: var(--global-border);
		border-radius: var(--global-border-radius);
		overflow: hidden;
	}

	.table-group-heading {
		--word-card-background-color--odd: var(--global-background-color);

		display: flex;
		flex-flow: row nowrap;
		place-items: center;
		place-content: space-between;

		padding: 0.4em 0.6em;
		cursor: pointer;

		background-color: var(--word-card-background-color--odd);

		&::after {
			content: "+";
		}

		&:has(+ .table-group-content--open) {
			border-block-end: var(--global-border);

			&::after {
				content: "-";
			}
		}
	}

	.table-group-content {
		display: none;

		&--open {
			display: block;
		}
	}
</style>
