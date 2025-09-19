<template>
	<header class="index-header">
		<div class="index-header-content">
			<h1>日本語カルテット単語索引</h1>
			<h2>Japanese Quartet Vocabulary Index</h2>
		</div>
	</header>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.index-header {
		--header-height-constant: 36px;
		--header-background-color: hsl(0, 0%, 15%);

		@extend %grid;

		&-content {
			@extend %grid-item-content;

			display: flex;
			flex-flow: column nowrap;
			gap: 1ch;
			place-items: center;

			padding: 1em;

			& h1 {
				text-align: center;
				letter-spacing: 1ch;
			}

			& h2 {
				font-size: 1em;
			}

			@container (width <= 600px) {
				& h1 {
					max-inline-size: 12ch;
				}
			}
		}

		// display: flex;
		// flex-flow: column nowrap;

		// padding: 1em;

		// &-lower {
		// 	display: flex;
		// 	gap: 1ch;
		// 	flex-flow: row nowrap;
		// }

		// @container (width > 600px) {
		// 	gap: 0.4em;
		// 	align-items: center;

		// 	&-lower {
		// 		font-size: 0.8em;
		// 	}
		// }
	}
</style>
