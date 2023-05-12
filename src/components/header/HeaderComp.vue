<script setup lang="ts"></script>

<template>
	<main class="main-root">
		<div class="main__div">
			<h2>日本語カルテット単語索引</h2>
			<p>Japanese Quartet Vocabulary Index written in Vue.</p>
		</div>
		<div class="main__notice">
			<h4>Notice!</h4>
			<p>Site still work in progress. Index from Quartet Volume 2 still not done!</p>
		</div>
	</main>
</template>

<style lang="scss">
.main {
	&-root {
		--notice-background-color: #7e3e36;
		padding: 1rem 1rem 0.3rem;
		margin: auto;
		max-width: 600px;

		& > * + * {
			margin-top: 0.5rem;
		}
	}

	&__notice {
		padding: 0.5rem 0.7rem;
		background: var(--notice-background-color);
		border-radius: 7px;
	}
}
</style>
