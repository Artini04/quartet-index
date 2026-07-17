<script setup lang="ts">
	const { appOptions } = useOptionsStore()

	const internalQueryLimit = computed({
		get: (): number => appOptions.queryLimit,
		set: (value: number) => {
			appOptions.queryLimit = Math.min(Math.max(value, 10), 50)
		},
	})
</script>

<template>
	<div class="lookup-options">
		<div class="lookup-options-row lookup-options-row--limit">
			<label for="query-limit">Query Limit</label>
			<input
				id="query-limit"
				v-model="internalQueryLimit"
				class="lookup-options-row--limit__input"
				type="number"
				min="10"
				max="50"
				step="5"
			/>
		</div>
	</div>
</template>

<style lang="scss">
	@use "~/assets/css/utils";
	@use "~/assets/css/defaults";

	$lookup-option-background-color: var(--global-background-color);
	$lookup-option-border: var(--global-border);
	$lookup-option-border-radius: var(--global-border-radius);

	.lookup-options-row {
		display: flex;
		flex-flow: row nowrap;
		place-items: center flex-start;
		gap: 1ch;
	}

	.lookup-options-row--limit {
		&__input {
			background-color: $lookup-option-background-color;
			border: $lookup-option-border;
			border-radius: $lookup-option-border-radius;

			outline: 0 solid transparent;
			padding: 0.6em 0.6em 0.4em;

			&:is(:focus-within) {
				outline-width: 2px;
				outline-color: hsl(0, 0%, 95%);
			}

			@include utils.use-transition("outline");
		}
	}
</style>
