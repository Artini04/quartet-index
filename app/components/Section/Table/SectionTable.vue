<script setup lang="ts">
	const { tableTags, tableTagsResults } = storeToRefs(useTableStore())
</script>

<template>
	<Section class="section-table">
		<div class="section-table-config">
			<FormRow>
				<label for="tag-lesson">Lesson</label>
				<input
					type="radio"
					id="tag-lesson"
					value="lesson"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-letter">Letter</label>
				<input
					type="radio"
					id="tag-letter"
					value="letter"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-meaning-total">Meaning Total</label>
				<input
					type="radio"
					id="tag-meaning-total"
					value="meaning-total"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-char-total">Japanese Characters Total</label>
				<input
					type="radio"
					id="tag-char-total"
					value="char-total"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-char-hi-total">
					Japanese Characters Total (Hiragana)
				</label>
				<input
					type="radio"
					id="tag-char-hi-total"
					value="char-hi-total"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-particle">Has Particle</label>
				<input
					type="radio"
					id="tag-particle"
					value="particle"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-suru">Has する</label>
				<input
					type="radio"
					id="tag-suru"
					value="suru"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-type">Has Type</label>
				<input
					type="radio"
					id="tag-type"
					value="type"
					v-model="tableTags"
				/>
			</FormRow>

			<FormRow>
				<label for="tag-kk">Has Kana-Kanji</label>
				<input
					type="radio"
					id="tag-kk"
					value="kana-kanji"
					v-model="tableTags"
				/>
			</FormRow>
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

	.section-table-config,
	.section-table-content {
		@extend %grid-item-content;
	}

	.section-table-config {
		display: flex;
		flex-flow: row wrap;
		gap: 1em;
	}

	.section-table-content {
		display: flex;
		flex-flow: column nowrap;
		gap: 1em;
	}
</style>
