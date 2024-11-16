<script setup lang="ts">
import { useOptions } from "~/composables/useOptions"
import { useLookup } from "~/composables/useDictionary"

const { appOptions } = useOptions()
const { appDictionary } = useLookup()
</script>

<template>
  <main>
    <SectorItem icon="tabler:notebook">
      <template #heading>日本語カルテット単語索引</template>
      <p>
        A small Quartet Vocabulary Index written using Vue and Nuxt. Lesson
        numbers are <span class="span--blue">colored</span> based on their
        respective book color. I also added links from English-Japanese
        dictionaries to access them easier. You can turn them off in the
        options.
      </p>
    </SectorItem>

    <SectorItem icon="tabler:bookmarks">
      <template #heading>単語リストについて</template>
      <p>
        Words used are from the book QUARTET: INTERMEDIATE JAPANESE ACROSS THE
        FOUR LANGUAGE SKILLS. You can download the spreadsheet in their
        <ActionLinkExternal
          src="https://quartet.japantimes.co.jp/en/resource/"
          value="resources" />
        website under Index section.
      </p>
    </SectorItem>

    <SectorItem icon="tabler:settings" :indent="false">
      <template #heading>アプリの設定</template>

      <ActionCheckbox
        v-model="appOptions.wordShowDict"
        id="check-show-link"
        text="Show links"
        subtext="Show dictionary links under the ja-en section of the word." />

      <ActionSelect
        v-model="appDictionary.limit"
        id="select-limit"
        text="Limit">
        <option :value="10">Default</option>
        <option :value="25">Many</option>
      </ActionSelect>
    </SectorItem>
  </main>
</template>
