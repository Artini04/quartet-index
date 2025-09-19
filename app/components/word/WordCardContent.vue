<script setup lang="ts">
	interface Props {
		jpText: string
		jpSubtext?: string | null
		jpSuru?: string | null
		jpParticle?: string | null

		mnMeaning: string[]
		mnVerbType?: string | null
	}

	defineProps<Props>()
</script>
<template>
	<div class="word-card-content">
		<div class="word-card-content-jp">
			<p class="word-card-content__text">{{ jpText }}</p>
			<p class="word-card-content__subtext">
				<span v-if="jpParticle">{{ jpParticle }}</span>
				<span v-if="jpSubtext">{{ jpSubtext }}</span>
				<span v-if="jpSuru">{{ jpSuru }}</span>
			</p>
		</div>
		<div class="word-card-content-mn">
			<p
				class="word-card-content__meaning"
				v-for="(mn, mnIdx) in mnMeaning"
				:key="mnIdx"
			>
				<span class="word-card-content__meaning-mn">
					{{ mn.trim() }}
				</span>
				<span class="word-card-content__verb-type">
					{{ mnVerbType }}
				</span>
			</p>
		</div>
	</div>
</template>

<style lang="scss">
	.word-card-content {
		&-jp {
			display: flex;
			gap: 0 1ch;
			flex-flow: row wrap;
		}

		&-mn {
			display: flex;
			gap: 0 1ch;
			flex-flow: row wrap;

			font-size: 0.9em;
		}

		&__text {
			color: hsl(14, 100%, 60%);
		}

		&__subtext {
			color: hsl(50, 100%, 60%);
		}

		&__meaning > * + * {
			margin-inline-start: 0.2em;
		}

		&__meaning-mn::before {
			content: "ー";
			margin-inline-end: 0.4em;
		}

		&__verb-type {
			font-style: italic;
		}
	}
</style>
