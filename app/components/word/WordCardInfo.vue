<script setup lang="ts">
	import type { Info } from "~~/shared/types"
	import { convertToFull } from "~~/shared/utils"

	defineProps<Info>()
</script>

<template>
	<div
		class="word-card-info"
		:class="
			lesson < 7 ? 'word-card-info--book-1' : 'word-card-info--book-2'
		"
	>
		<p
			class="word-card-info__lesson"
			:class="
				lesson < 7
					? 'word-card-info__lesson--book-1'
					: 'word-card-info__lesson--book-2'
			"
		>
			第{{ convertToFull(lesson) }}課
		</p>
		<p class="word-card-info__reading">読{{ convertToFull(reading) }}</p>
		<p class="word-card-info__location">{{ letter_location }}</p>
		<p class="word-card-info__kanji">{{ kanji }}</p>
	</div>
</template>

<style lang="scss">
	.word-card-info {
		display: flex;
		gap: 0 1ch;
		flex-flow: row nowrap;

		& > * {
			flex: 1 0 auto;
		}

		&__lesson {
			flex: 1 1 99%;

			&--book-1 {
				color: hsl(0, 100%, 70%);
			}

			&--book-2 {
				color: hsl(200, 100%, 70%);
			}
		}
	}
</style>
