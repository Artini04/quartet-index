<script setup lang="ts"></script>

<template>
	<Section class="lookup">
		<SectionLookupSearch class="lookup-entry-wrapper" />
		<SectionLookupOptions class="lookup-options-wrapper" />
		<SectionLookupGrid class="lookup-grid-wrapper" />
	</Section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.lookup-entry-wrapper,
	.lookup-options-wrapper,
	.lookup-grid-wrapper {
		@extend %grid-item-content;
	}
</style>
