<script setup lang="ts">
const { appDictionary } = useLookup()
const { appOptions } = useOptions()

useHeadSafe({
  title: "Info"
})
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
          text="resources"
        />
        website under Index section.
      </p>
    </SectorItem>
  </main>
</template>
