<script setup lang="ts">
	import ActionLinkExternalBase from "~/components/Action/ActionLinkExternal/ActionLinkExternalBase.vue"
</script>

<template>
	<Section class="section-about">
		<SectionItem
			class="section-about-info"
			icon="tabler:notebook"
			title="日本語カルテット単語索引"
		>
			<p class="text-indent">
				A small Japanese Quartet Vocabulary Index written in Nuxt.
				Lesson numbers are
				<span class="span--blue">colored</span> based on their
				respective book color. I also added links from English-Japanese
				dictionaries to access them easier.
			</p>
		</SectionItem>

		<SectionItem
			class="section-about-list"
			icon="tabler:bookmarks"
			title="単語リストについて"
		>
			<p class="text-indent">
				Words used are from the book QUARTET: INTERMEDIATE JAPANESE
				ACROSS THE FOUR LANGUAGE SKILLS. You can download the
				spreadsheet in their
				<ActionLinkExternal
					:component="ActionLinkExternalBase"
					link="https://quartet.japantimes.co.jp/en/resource/"
					label="resources"
				/>
				website under Index section.
			</p>
		</SectionItem>

		<SectionItem
			class="section-about-vocab"
			icon="tabler:writing-sign"
			title="単語リストのシンボル"
		>
			<WordVocabIntro
				symbol="&#9670;"
				text-jp="新出漢字がある単語（読み書き）"
				text-en="Words with new kanji (reading and writing)"
			/>
			<WordVocabIntro
				symbol="&#9671;"
				text-jp="新出漢字がある単語（読みだけ）"
				text-en="Words with new kanji (reading only)"
			/>
			<WordVocabIntro
				symbol="&#65343;"
				text-jp="新出漢字"
				text-en="New kanji"
			/>
		</SectionItem>
	</Section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.section-about-info,
	.section-about-list,
	.section-about-vocab {
		@extend %grid-item-content;
	}

	.section-about-vocab {
		& .vocab-intro + .vocab-intro {
			margin-block-start: 0.6em;
		}
	}
</style>
