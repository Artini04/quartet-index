<template>
	<header class="index-header">
		<div class="index-header-content">
			<h1>日本語カルテット単語索引</h1>
			<h2>Japanese Quartet Vocabulary Index</h2>
		</div>

		<div class="index-header-links">
			<IndexPageLink link="/" label="Lookup" icon="lucide:text-search" />
			<IndexPageLink link="/table" label="Table" icon="lucide:table-2" />
			<IndexPageLink
				link="/about"
				label="About"
				icon="lucide:paperclip"
			/>
		</div>
	</header>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.index-header {
		--header-height-constant: 36px;
		--header-background-color: hsl(0, 0%, 15%);

		@extend %grid;
	}

	.index-header-content,
	.index-header-links {
		@extend %grid-item-content;
	}

	.index-header-content {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5ch;

		padding-block-start: 1em;

		@container (width > 600px) {
			text-align: center;
		}

		@container (width <= 600px) {
			h1 {
				max-inline-size: 12ch;
			}
		}

		h1 {
			font-size: clamp(1.4em, 10vw + 1rem, 2.6em);
			letter-spacing: 1ch;
		}

		h2 {
			font-size: clamp(1.1em, 10vw + 1rem, 1.2em);
		}
	}

	.index-header-links {
		display: flex;
		flex-flow: row wrap;
		gap: 0.4em;

		padding-block-end: 1em;
	}
</style>
