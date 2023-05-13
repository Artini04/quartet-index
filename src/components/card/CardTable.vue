<script setup lang="ts"></script>

<template>
	<div class="result-grid__root" v-auto-animate>
		<slot name="item"> </slot>
	</div>
</template>

<style lang="scss">
$border-thickness: 1px;

@media screen and (max-width: 500px) {
	.result-grid {
		&__root {
			display: flex;
			flex-flow: column wrap;

			& > * {
				padding: 0.5rem;
			}

			& > * + * {
				border-top: $border-thickness solid var(--app-font-muted);
			}
		}
	}
}

@media screen and (min-width: 501px) {
	.result-grid {
		&__root {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 1rem;
			max-width: 900px;
			margin-inline: auto;

			& > * {
				padding: 1rem;
				border: 1px solid var(--app-font-muted);
				border-radius: 7px;
			}
		}
	}
}
</style>
