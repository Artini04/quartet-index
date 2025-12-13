<script setup lang="ts">
	interface Props {
		keyword: string
	}

	defineProps<Props>()
</script>

<template>
	<div class="card-word-dict">
		<CardWordDictLink
			label="jpdb.io"
			:link="`https://jpdb.io/search?q=${keyword}#a`"
		/>
		<CardWordDictLink
			label="jisho.org"
			:link="`https://jisho.org/search/${keyword}`"
		/>
	</div>
</template>

<style lang="scss">
	.card-word-dict {
		display: flex;
		flex-flow: row wrap;
		gap: 0 1ch;
	}
</style>
