<script setup lang="ts">
	const { result } = storeToRefs(useLookupStore())
	const { appOptions } = storeToRefs(useOptionsStore())
</script>

<template>
	<Section class="lookup">
		<div class="lookup-search">
			<ActionSearch />
		</div>

		<div class="lookup-grid" v-auto-animate>
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
	</Section>
</template>

<style lang="scss">
	@use "~/assets/css/layouts";

	.lookup {
		&:has(.lookup-grid:empty) {
			gap: 0;
		}
	}

	.lookup-search,
	.lookup-grid {
		@extend %grid-item-content;
	}

	.lookup-grid {
		--lookup-grid-item-min-size: min(200px, 100%);

		display: grid;
		gap: 1em;
		grid-template-columns: repeat(
			auto-fit,
			minmax(var(--lookup-grid-item-min-size), 1fr)
		);
	}
</style>
