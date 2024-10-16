<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '@/stores/lookup'
import ActionSearch from '@/components/actions/ActionSearch.vue'
import WordCard from '@/components/WordCard.vue'
import WordNoResults from '@/components/WordNoResults.vue'
import SectorItem from '@/components/SectorItem.vue'
const { fusedQuery, hasSearched } = useLookup()
</script>

<template>
    <div class="controller">
        <ActionSearch />
    </div>
    <div class="results-grid">
        <WordCard v-for="{ item, refIndex } in fusedQuery" :key="refIndex" :item />
        <WordNoResults v-if="fusedQuery.length <= 0 && hasSearched === true" />
    </div>

    <div class="about">
        <SectorItem icon="tabler:notebook">
            <template #heading>日本語カルテット単語索引</template>
            <p>
                A small Quartet Vocabulary Index written in Vue3. Lesson numbers are colored based
                on their respective book color. I also added links from English-Japanese
                dictionaries to access them easier. You can turn them off in the options.
            </p>
        </SectorItem>

        <SectorItem icon="tabler:bookmarks">
            <template #heading>単語リストについて</template>
            <p>
                Words used are from the book QUARTET: INTERMEDIATE JAPANESE ACROSS THE FOUR LANGUAGE
                SKILLS. You can download the spreadsheet in their
                <a
                    class="with-decor"
                    href="https://quartet.japantimes.co.jp/en/resource/"
                    target="_blank">
                    resources</a
                >
                website under Index section.
            </p>
        </SectorItem>
    </div>
</template>

<style lang="scss">
.search-result-list {
    &[has-searched='false'] {
        display: none;
    }
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.6em;
}
</style>
