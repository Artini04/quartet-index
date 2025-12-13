<script setup lang="ts"></script>

<template>
	<Section class="lookup">
		<SectionLookupSearch class="lookup-entry-wrapper" />
		<SectionLookupGrid class="lookup-grid-wrapper" />

		<!--<div v-auto-animate class="lookup-grid">
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
							word.data.ja_kana_kanji ?
								word.data.ja_hiragana
							:	null
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
		</div>-->
	</Section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.lookup-entry-wrapper,
	.lookup-grid-wrapper {
		@extend %grid-item-content;
	}

	//.lookup {
	//	&:has(.lookup-grid:empty) {
	//		gap: 0;
	//	}
	//}

	//.lookup-dwrap {
	//	@extend %grid-item-content;
	//}

	//.lookup-search,
	//.lookup-grid {
	//	@extend %grid-item-content;
	//}

	//.lookup-grid {
	//	--lookup-grid-item-min-size: min(200px, 100%);

	//	display: grid;
	//	gap: 1em;
	//	grid-template-columns: repeat(
	//		auto-fit,
	//		minmax(var(--lookup-grid-item-min-size), 1fr)
	//	);
	//}
</style>
