<template>
	<header class="header__root">
		<h1 class="header__title">Quartet Vocabulary Index</h1>
		<div class="notice-wrapper">
			<div class="temp">
				<h3>NOTICE!</h3>
				<p>Quartet Vol.II index still work-in-progress!</p>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	&__root {
		& > * + * {
			margin-top: 1rem;
		}
	}

	&__title {
		text-align: center;
		margin: 1rem;
	}
}

.notice-wrapper {
	padding: 1rem;
	background: rgb(37, 136, 98);

	.temp {
		max-width: 600px;
		margin-inline: auto;
	}
}
</style>
