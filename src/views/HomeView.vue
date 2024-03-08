<script setup lang="ts">
import 'iconify-icon'
import { useLookup } from '@/stores/lookup'
import ActionSearch from '@/components/actions/ActionSearch.vue'
import SectorItem from '@/components/SectorItem.vue'
import WordCard from '@/components/WordCard.vue'

const { fusedQuery } = useLookup()
</script>

<template>
    <main class="main | flow-wf">
        <div class="flow-wf">
            <ActionSearch />

            <div class="word-list | flow-wf" v-auto-animate>
                <WordCard v-for="{ item, refIndex } in fusedQuery.results" :key="refIndex" :item />
            </div>
        </div>

        <div class="about | flow-wf">
            <SectorItem icon="tabler:notebook">
                <template #heading>日本語カルテット単語索引アプリ</template>
                <p>
                    A small Quartet Vocabulary Index written in Vue3. Lesson numbers are colored
                    based on their respective book color. I also added links from English-Japanese
                    dictionaries to access them easier. You can turn them off in the options.
                </p>
            </SectorItem>

            <SectorItem icon="tabler:bookmarks">
                <template #heading>単語リストについて</template>
                <p>
                    Words used are from the book QUARTET: INTERMEDIATE JAPANESE ACROSS THE FOUR
                    LANGUAGE SKILLS. You can download the spreadsheet in their
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
    </main>
</template>

<style>
.main,
.about {
    gap: 1rem;
}
</style>
