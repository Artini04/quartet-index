<script setup lang="ts">
import SectorItem from '@/components/SectorItem.vue'
</script>

<template>
    <div class="about | flow-wf">
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
