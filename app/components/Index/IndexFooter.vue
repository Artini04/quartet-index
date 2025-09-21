<template>
	<footer class="index-footer">
		<div class="index-footer-content">
			<ActionLinkExternalMini
				href="https://github.com/Artini04/quartet-index"
				icon="tabler:brand-github"
				text="GitHub"
			/>
			<span>{{ new Date().getFullYear() }}年</span>
		</div>
	</footer>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.index-footer {
		@extend %grid;

		padding: 1em;
		font-size: 0.8em;
		color: var(--global-font-color--muted);

		&-content {
			@extend %grid-item-content;

			display: flex;
			flex-flow: row nowrap;
			place-content: space-between;
		}
	}
</style>
