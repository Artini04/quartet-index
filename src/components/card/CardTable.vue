<script setup lang="ts"></script>

<template>
	<div class="result__grid" v-auto-animate>
		<slot name="item"></slot>
	</div>
</template>

<style lang="scss">
$border-thickness: 1px;

.result {
	&__grid {
		margin: 1rem;
	}
}

@media screen and (max-width: 500px) {
	.result {
		&__grid {
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
	.result {
		&__grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

			& > * {
				padding: 1rem;
				border-left: 1px solid var(--app-font-muted);
			}
		}
	}
}
</style>
