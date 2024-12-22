<script lang="ts" setup>
useHead({
  title: "About"
})
</script>

<template>
  <div class="about-view">
    <SectionItem icon="tabler:notebook">
      <template #heading>日本語カルテット単語索引</template>
      <p class="first-indent">
        A small Japanese Quartet Vocabulary Index written using Nuxt. Lesson
        numbers are <span class="span--blue">colored</span> based on their
        respective book color. I also added links from English-Japanese
        dictionaries to access them easier. You can turn them off in the
        options.
      </p>
    </SectionItem>

    <SectionItem icon="tabler:bookmarks">
      <template #heading>単語リストについて</template>
      <p class="first-indent">
        Words used are from the book QUARTET: INTERMEDIATE JAPANESE ACROSS THE
        FOUR LANGUAGE SKILLS. You can download the spreadsheet in their
        <ActionLinkExternal
          text="resources"
          src="https://quartet.japantimes.co.jp/en/resource/" />
        website under Index section.
      </p>
    </SectionItem>
  </div>
</template>

<style lang="scss">
$about-margin: 1em;

.about-view {
  & > * + * {
    margin-top: 1em;
  }
}
</style>
