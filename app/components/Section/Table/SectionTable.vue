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
					v-model="tableTags"
					label="Lesson"
					value="lesson"
				/>
				<FormRowRadio
					id="tag-letter"
					v-model="tableTags"
					label="Letter"
					value="letter"
				/>
				<FormRowRadio
					id="tag-meaning-total"
					v-model="tableTags"
					label="Total Meaning"
					value="meaning-total"
				/>
				<FormRowRadio
					id="tag-char-total"
					v-model="tableTags"
					label="Total Japanese Characters"
					value="char-total"
				/>
				<FormRowRadio
					id="tag-char-hi-total"
					v-model="tableTags"
					label="Total Japanese Characters (Hiragana)"
					value="char-hi-total"
				/>
				<FormRowRadio
					id="tag-diamond"
					v-model="tableTags"
					label="Has Diamond"
					value="diamond"
				/>
				<FormRowRadio
					id="tag-particle"
					v-model="tableTags"
					label="Has Particle"
					value="particle"
				/>
				<FormRowRadio
					id="tag-suru"
					v-model="tableTags"
					label="Has する"
					value="suru"
				/>
				<FormRowRadio
					id="tag-type"
					v-model="tableTags"
					label="Has Type"
					value="type"
				/>
				<FormRowRadio
					id="tag-kana-kanji"
					v-model="tableTags"
					label="Has Kana Kanji"
					value="kana-kanji"
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
