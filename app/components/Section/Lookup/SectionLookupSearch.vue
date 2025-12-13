<script setup lang="ts">
	import type { InputHTMLAttributes } from "vue"

	const { searchOptions, dictResults } = storeToRefs(useLookupStore())
	const lookupInputEl = useTemplateRef("lookup-input")
	const inputProperties: InputHTMLAttributes = {
		placeholder: "ひらがな, カタカナ, 漢字, 英語を探す...",
		autocomplete: "off",
		autocapitalize: "off",
		autocorrect: "off",
		spellcheck: false,
	}

	function clearFocus() {
		searchOptions.value.search = ""
		lookupInputEl.value?.focus()
	}
</script>

<template>
	<label for="lookup" class="lookup-search">
		<div class="lookup-search-entry">
			<Icon name="lucide:text-search" />
			<input
				id="lookup"
				ref="lookup-input"
				v-model.lazy.trim="searchOptions.search"
				type="text"
				class="lookup-search-entry__input"
				v-bind="inputProperties"
			/>
			<input
				class="lookup-search-entry__clear"
				type="button"
				value="Clear"
				@click="clearFocus()"
			/>
		</div>

		<div class="lookup-search-filter">
			<Icon name="lucide:database" />
			<p class="lookup-filter-total__total">{{ dictResults.total }}</p>
		</div>
	</label>
</template>

<style lang="scss">
	@use "~/assets/css/utils";
	@use "~/assets/css/defaults";

	$lookup-search-entry-size: 90%;
	$lookup-background-color: var(--global-background-color);
	$lookup-border: var(--global-border);
	$lookup-border-radius: var(--global-border-radius);

	.lookup-search {
		display: flex;
		flex-flow: row nowrap;

		background-color: $lookup-background-color;
		border: $lookup-border;
		border-radius: $lookup-border-radius;

		outline: 0 solid transparent;

		&:is(:focus-within) {
			outline-width: 2px;
			outline-color: hsl(0, 0%, 95%);
		}

		@include utils.use-transition("outline");
	}

	.lookup-search-entry,
	.lookup-search-filter {
		gap: 0.5ch;
		display: flex;
		flex-flow: row nowrap;
		place-items: center;

		padding: 0.6em 0.6em 0.4em;

		@container (width <= 600px) {
			padding: 0.8em 1em;
		}
	}

	.lookup-search-entry {
		flex: 1 1 $lookup-search-entry-size;

		&__input {
			@extend %default_input_text;
		}

		&__clear {
			@extend %default_input_button;

			text-decoration: underline;
		}
	}

	.lookup-search-filter {
		flex: 1 1 calc(100% - $lookup-search-entry-size);
	}
</style>
