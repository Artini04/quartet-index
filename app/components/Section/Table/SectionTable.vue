<script setup lang="ts">
	const { tableResult } = storeToRefs(useTableStore())
	const { generateTable } = useTableStore()

	onMounted(() => {
		generateTable()
	})
</script>

<template>
	<Section class="section-table">
		<div class="section-table-content">
			<SectionTableGroup
				v-for="(words, wordKey) of tableResult"
				:key="wordKey"
				:group-key="wordKey"
			>
				<SectionTableItem
					v-for="item in words"
					:key="item"
					v-bind="item"
				/>
			</SectionTableGroup>
		</div>
	</Section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.section-table-content {
		@extend %grid-item-content;

		display: flex;
		flex-flow: column nowrap;
		gap: 1em;
	}
</style>
