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

<style lang="scss"></style>
