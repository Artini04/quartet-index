<script setup lang="ts">
	interface Props {
		search: string
	}

	defineProps<Props>()
</script>

<template>
	<div class="word-card-links">
		<WordCardLink :href="`https://jpdb.io/search?q=${search}#a`">
			<span>jpdb.io</span>
		</WordCardLink>

		<WordCardLink :href="`https://jisho.org/search/${search}`">
			<span>jisho.org</span>
		</WordCardLink>
	</div>
</template>

<style lang="scss">
	.word-card-links {
		font-size: 0.8em;
		color: var(--global-font-color--muted);

		display: flex;
		gap: 0 2ch;
		flex-flow: row wrap;
	}
</style>
