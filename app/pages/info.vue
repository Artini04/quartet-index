<script setup lang="ts">
const { appDictionary } = useLookup()
const { appOptions } = useOptions()

function clearLocalStorage() {
  localStorage.clear()
}

useHead({
  title: "Info / Preferences"
})
</script>

<template>
  <main>
    <SectorItem icon="tabler:settings" :background="true">
      <template #heading>アプリの設定</template>

      <SectorItem icon="tabler:cards">
        <template #heading>Card</template>
        <ActionCheckbox
          v-model="appOptions.wordShowDicts"
          id="check-show-links"
          text="Dictionary Links"
          subtext="Show dictionary links at the bottom of the word card." />
        <ActionCheckbox
          v-model="appOptions.wordBiggerJpText"
          id="check-bigger-jp"
          text="Enlarge Japanese Texts" />
        <ActionCheckbox
          v-model="appOptions.wordBiggerEnText"
          id="check-bigger-en"
          text="Enlarge English Texts" />
      </SectorItem>

      <SectorItem icon="tabler:database-search">
        <template #heading>Lookup</template>
        <ActionSelect
          v-model="appDictionary.limit"
          id="select-limit"
          text="Limit"
          subtext="Select the limit of the query.">
          <option :value="10">Default</option>
          <option :value="25">Many</option>
        </ActionSelect>
      </SectorItem>

      <SectorItem icon="tabler:help-square-rounded">
        <template #heading>Other</template>
        <ActionCheckbox
          v-model="appOptions.otherLinkDecor"
          id="check-show-decor"
          text="External Link Underline"
          subtext="Show the underline decoration from external links." />

        <input
          class="clear-local"
          type="button"
          value="Clear localstorage"
          @click="clearLocalStorage()" />
      </SectorItem>
    </SectorItem>

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
          text="resources" />
        website under Index section.
      </p>
    </SectorItem>
  </main>
</template>

<style lang="scss">
// TODO: create action button
.clear-local {
  border: 0;
  border-radius: 7px;
  padding: 0.6em 1em;
  background: rgb(255, 75, 75);
}
</style>
