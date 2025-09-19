<script setup lang="ts"></script>

<template>
	<div class="word-card">
		<slot name="info" />
		<slot name="content" />
		<slot name="links" />
	</div>
</template>

<style lang="scss">
	.word-card {
		--word-card-border: var(--global-border);
		--word-card-border-radius: var(--global-border-radius);
		--word-card-background-color: var(--global-background-color--body);
		--word-card-background-color--odd: var(--global-background-color);

		background-color: var(--word-card-background-color);
		border: var(--word-card-border);
		border-radius: var(--word-card-border-radius);
		overflow: hidden;

		display: flex;
		flex-flow: column nowrap;

		&-content,
		&-info,
		&-links {
			flex: 1 1 auto;

			&:nth-child(odd) {
				background-color: var(--word-card-background-color--odd);
			}
		}

		&-content {
			flex: 1 1 99%;
			padding: 0.6em;
		}

		&-info {
			padding: 0.2em 0.6em 0.3em;
		}

		&-links {
			padding: 0.4em 0.6em 0.6em;
		}
	}
</style>
