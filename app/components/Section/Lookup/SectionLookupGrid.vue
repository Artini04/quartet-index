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
	$grid-item-min-size: min(250px, 100%);

	.lookup-grid {
		gap: 0.6em;
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax($grid-item-min-size, 1fr)
		);
	}
</style>
