<script setup lang="ts">
	const { dictResults } = storeToRefs(useLookupStore())
</script>

<template>
	<div class="lookup-grid">
		<LazyCardWord
			v-for="{ item: word, refIndex: index } in dictResults.result"
			:id="word.id"
			:key="index"
			:info="word.info"
			:data="word.data"
		/>
	</div>
</template>

<style lang="scss">
	.lookup-grid {
		--grid-item-min-size: min(250px, 100%);

		gap: 0.6em;
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax(var(--grid-item-min-size), 1fr)
		);

		@container (width > 1920px) {
			--grid-item-min-size: min(500px, 100%);
		}
	}
</style>
