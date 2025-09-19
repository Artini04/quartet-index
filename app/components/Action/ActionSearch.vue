<script setup lang="ts">
	const { gridAnnouncement, searchOptions, result } = storeToRefs(
		useLookupStore()
	)

	function handleInputChange() {
		gridAnnouncement.value = false
		navigateTo("/")
	}
</script>

<template>
	<label for="lookup" class="action-search">
		<Icon name="tabler:search" />
		<input
			id="lookup"
			class="action-search__input"
			type="text"
			placeholder="ひらがな, カタカナ, 漢字, 英語を探す..."
			autocomplete="off"
			autocorrect="off"
			spellcheck="false"
			v-model.lazy="searchOptions.search"
			@change="handleInputChange()"
		/>
		<input
			class="action-search__clear"
			type="button"
			value="Clear"
			@click.prevent="searchOptions.search = ''"
		/>
		<Icon name="tabler:filter" />
		<p class="action-search__result-length">{{ result.length }}</p>
	</label>
</template>

<style lang="scss">
	@use "~/assets/css/defaults";
	@use "~/assets/css/utils";

	.action-search {
		--lookup-background-color: var(--global-background-color);
		--lookup-border: var(--global-border);
		--lookup-border-radius: var(--global-border-radius);

		display: flex;
		gap: 0 1ch;
		flex-flow: row nowrap;
		place-items: center;

		width: 100%;

		background-color: var(--lookup-background-color);
		border: var(--lookup-border);
		border-radius: var(--lookup-border-radius);

		@include utils.use-transition("outline, border");

		&:is(:focus-within) {
			border-color: white;
			outline: 2px solid white;
		}

		@container (width > 600px) {
			padding: 0.6em;
		}

		@container (width <= 600px) {
			padding: 0.8em 1em;
		}

		& > * {
			flex: 1 1 auto;
		}

		&__input {
			@extend %default_input_text;

			height: 100%;
			flex: 1 1 99%;
		}

		&__clear {
			@extend %default_input_button;

			border: var(--global-border);
			border-radius: var(--global-border-radius-sm);

			padding: 0.2em 0.6em;

			background: lightcoral;
			color: hsl(0, 0%, 10%);
		}
	}
</style>
