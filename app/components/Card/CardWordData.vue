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
			<p class="card-word-data__meaning">
				{{ enMeaning.join(", ") }}
			</p>
			<p class="card-word-data__type">{{ enVerbType }}</p>
		</div>
	</div>
</template>

<style lang="scss">
	$data-text-color: hsl(14, 100%, 60%);
	$data-subtext-color: hsl(50, 100%, 60%);

	.card-word-data {
		display: flex;
		flex-flow: column nowrap;
		place-content: space-between;

		&__text {
			color: $data-text-color;
		}

		&__subtext {
			color: $data-subtext-color;
		}

		&__type {
			font-style: italic;
		}
	}

	.card-word-data-ja,
	.card-word-data-en {
		display: flex;
		flex-flow: row wrap;
		gap: 0 1ch;
	}

	.card-word-data-en {
		&::before {
			content: "【英】";
		}
	}
</style>
