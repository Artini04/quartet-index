<script setup lang="ts">
	interface Props {
		jaText: string
		jaSubtext: string | null
		jaParticle: string | null
		jaSuru: string | null

		enMeaning: string[]
		enVerbType: string | null
	}

	defineProps<Props>()
</script>

<template>
	<div class="card-word-data">
		<div class="card-word-data-ja">
			<p class="card-word-data__text">{{ jaText }}</p>
			<p class="card-word-data__subtext">{{ jaSubtext }}</p>
		</div>

		<div class="card-word-data-en">
			<p class="card-word-data__en-meaning">{{ enMeaning }}</p>
			<p class="card-word-data__en-type">{{ enVerbType }}</p>
		</div>
	</div>
</template>
