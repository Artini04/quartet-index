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
    <SectorItem icon="tabler:notebook">
      <template #heading>日本語カルテット単語索引</template>
      <p>
        A small Quartet Vocabulary Index written using Vue and Nuxt. Lesson
        numbers are <span class="span--blue">colored</span> based on their
        respective book color.
      </p>
      <p>
        I also added links from English-Japanese dictionaries to access them
        easier. You can turn them off in the options.
      </p>
      <ActionCheckbox
        v-model="appOptions.wordShowDicts"
        id="check-show-links"
        text="Dictionary Links"
        subtext="Show dictionary links at the bottom of the word card." />
      <ActionCheckbox
        v-model="appOptions.otherLinkDecor"
        id="check-show-decor"
        text="External Link Underline"
        subtext="Show the underline decoration from external links." />

      <p>
        You can also enlarge Japanese and English text within the word card.
      </p>
      <ActionCheckbox
        v-model="appOptions.wordBiggerJpText"
        id="check-bigger-jp"
        text="Enlarge Japanese Texts" />
      <ActionCheckbox
        v-model="appOptions.wordBiggerEnText"
        id="check-bigger-en"
        text="Enlarge English Texts" />
      <ActionSelect
        v-model="appDictionary.limit"
        id="select-limit"
        text="And, of course, the limit."
        subtext="Select the limit of the query.">
        <option :value="10">Default (10)</option>
        <option :value="20">Many (20)</option>
        <option :value="30">Excessive (30)</option>
      </ActionSelect>
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

    <SectorItem>
      <template #heading>Other</template>
      <p>Clear <code class="subtext">localStorage</code></p>

      <ActionButton
        id="click-clear-storage"
        text="Clear localStorage"
        :opt="{ isAlert: true }"
        @click="clearLocalStorage()" />
    </SectorItem>
  </main>
</template>
