<script setup lang="ts">
	const { tableTags, tableTagsResults } = storeToRefs(useTableStore())
</script>

<template>
	<Section class="section-table">
		<div class="section-table-heading">
			<h4>Filter</h4>

			<div class="section-table-configs">
				<FormRowRadio
					id="tag-lesson"
					label="Lesson"
					value="lesson"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-letter"
					label="Letter"
					value="letter"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-meaning-total"
					label="Total Meaning"
					value="meaning-total"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-char-total"
					label="Total Japanese Characters"
					value="char-total"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-char-hi-total"
					label="Total Japanese Characters (Hiragana)"
					value="char-hi-total"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-particle"
					label="Has Particle"
					value="particle"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-suru"
					label="Has する"
					value="suru"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-type"
					label="Has Type"
					value="type"
					v-model="tableTags"
				/>
				<FormRowRadio
					id="tag-kana-kanji"
					label="Has Kana Kanji"
					value="kana-kanji"
					v-model="tableTags"
				/>
			</div>
		</div>

		<div class="section-table-content">
			<SectionTableGroup
				v-for="(words, wordKey) of tableTagsResults"
				:key="wordKey"
				:group-key="wordKey"
				:group-total="words?.length ?? 0"
			>
				<SectionTableItem
					v-for="item in words"
					:key="item.id"
					v-bind="item"
				/>
			</SectionTableGroup>
		</div>
	</Section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.section-table-heading,
	.section-table-content {
		@extend %grid-item-content;
	}

	.section-table-configs {
		display: flex;
		flex-flow: row wrap;
		gap: 0.4em;

		margin-block-start: 1em;

		@container (width <= 600px) {
			flex-flow: column nowrap;
		}
	}

	.section-table-content {
		display: flex;
		flex-flow: column nowrap;
		gap: 1em;
	}
</style>
