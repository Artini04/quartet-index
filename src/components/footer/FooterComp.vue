<template>
	<footer>
		<p>
			This <a href="https://github.com/Artini04/quartet-index" target="_blank">project</a> was
			made by <a href="https://github.com/Artini04" target="_blank">artini04</a> as a learning
			project both for Web Development and Japanese! This is not a Japanese Dictionary! Words
			used here are from the book "Quartet: Intermediate Japanese Across the Four Language
			Skills"
		</p>
	</footer>
</template>

<style lang="scss">
footer {
	max-width: 600px;
	padding: 1rem 0;
	margin: 1rem auto;
	border-top: 1px solid var(--app-font-muted);

	p {
		text-align: justify;
	}
}

@media screen and (max-width: 600px) {
	footer {
		margin: 1rem;
	}
}
</style>
