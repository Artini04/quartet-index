<template>
	<section class="section-wrapper">
		<slot />
	</section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.section-wrapper {
		@extend %grid;
	}
</style>
