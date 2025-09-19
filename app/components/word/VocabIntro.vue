<script setup lang="ts">
	interface Props {
		symbol: string
		textJp: string
		textEn: string
	}

	defineProps<Props>()
</script>

<template>
	<div class="vocab-intro">
		<p class="vocab-intro__symbol">{{ symbol }}</p>
		<div class="vocab-intro__text">
			<p class="vocab-intro__text-jp">{{ textJp }}</p>
			<p class="vocab-intro__text-en">{{ textEn }}</p>
		</div>
	</div>
</template>

<style lang="scss">
	.vocab-intro {
		display: flex;
		flex-flow: row nowrap;
		gap: 0 1em;

		place-items: center;

		&__text-en {
			font-size: 0.8em;
			color: hsl(from currentColor h s 50%);
		}
	}
</style>
