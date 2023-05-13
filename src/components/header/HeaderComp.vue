<script setup lang="ts"></script>

<template>
	<header class="header-root">
		<div class="header__div">
			<h2>日本語カルテット単語索引</h2>
			<p>Japanese Quartet Vocabulary Index written in Vue.</p>
		</div>
		<div class="header__notice">
			<h2 class="notice__title">Notice!</h2>
			<p>Site still work in progress. Index from Quartet Volume 2 still not done!</p>
		</div>
	</header>
</template>

<style lang="scss">
.header {
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

.notice {
	&__title {
		font-size: 1.2rem;
	}
}
</style>
