<script setup lang="ts">
	interface Props {
		lesson: number
		reading: number
		location: string
		diamond: string
	}

	const { lesson } = defineProps<Props>()
	const lessonBook =
		lesson < 7 ?
			"card-word-info__lesson--book-1"
		:	"card-word-info__lesson--book-2"
</script>

<template>
	<div class="card-word-info">
		<p class="card-word-info__lesson" :class="lessonBook">
			第{{ convertToFull(lesson) }}課
		</p>
		<p class="card-word-info__reading">読{{ convertToFull(reading) }}</p>
		<p class="card-word-info__location">{{ location }}</p>
		<p class="card-word-info__diamond">{{ diamond }}</p>
	</div>
</template>

<style lang="scss">
	$info-small-size: 50px;

	.card-word-info {
		display: grid;
		grid-template-columns: 1fr $info-small-size $info-small-size $info-small-size;

		&__reading,
		&__location,
		&__diamond {
			justify-self: flex-end;
		}
	}
</style>
