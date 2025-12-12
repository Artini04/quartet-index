<script setup lang="ts">
	import ActionLinkExternalBase from "~/components/Action/ActionLinkExternal/ActionLinkExternalBase.vue"

	const { result } = storeToRefs(useLookupStore())
	const { appOptions } = storeToRefs(useOptionsStore())

	useHead({
		title: "Index",
	})
</script>

<template>
	<main id="index">
		<!-- SEARCH -->
		<div class="index-search">
			<ActionSearch />
		</div>

		<!-- RESULT GRID -->
		<div class="index-grid" v-auto-animate>
			<WordCard
				v-for="{ item: word, refIndex: index } in result"
				:key="index"
			>
				<template #info>
					<WordCardInfo v-bind="word.info" />
				</template>

				<template #content>
					<WordCardContent
						:jp-text="
							word.data.ja_kana_kanji ?? word.data.ja_hiragana
						"
						:jp-subtext="
							word.data.ja_kana_kanji
								? word.data.ja_hiragana
								: null
						"
						:jp-particle="word.data.ja_particle"
						:jp-suru="word.data.ja_suru"
						:mn-meaning="word.data.en_meaning"
						:mn-verb-type="word.data.en_verb_type"
					/>
				</template>

				<template #links>
					<WordCardLinks
						v-if="appOptions.cardDictionary"
						:search="
							word.data.ja_kana_kanji ?? word.data.ja_hiragana
						"
					/>
				</template>
			</WordCard>
		</div>

		<!-- INFO -->
		<div class="about-info">
			<SectionItem
				icon="tabler:notebook"
				title="日本語カルテット単語索引"
			>
				<p class="text-indent">
					A small Japanese Quartet Vocabulary Index written in Nuxt.
					Lesson numbers are
					<span class="span--blue">colored</span> based on their
					respective book color. I also added links from
					English-Japanese dictionaries to access them easier.
				</p>
			</SectionItem>

			<SectionItem icon="tabler:bookmarks" title="単語リストについて">
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
				class="about-info-vocab-intro"
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
		</div>
	</main>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.index-search,
	.index-grid {
		@extend %grid-item-content;
	}

	.index-grid {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
	}

	.about-info {
		@extend %grid-item-content;

		& > * + * {
			margin-block-start: 1em;
		}

		&-vocab-intro {
			& .section-item-content > * + * {
				margin-block-start: 0.4em;
			}
		}
	}
</style>
