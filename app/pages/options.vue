<script lang="ts" setup>
const { appOptions } = useApplication()

function clearLocalStorage() {
  localStorage.clear()
}

useHead({
  title: "Options"
})
</script>

<template>
  <div class="options-view">
    <SectionItem icon="tabler:cards-filled" :background="true">
      <template #heading>Card Options</template>
      <ActionCheckbox
        id="check-show-dictionary"
        text="Show dictionary"
        subtext="Show dictionary link at the bottom of the word card."
        v-model="appOptions.showDictionary" />

      <ActionCheckbox
        id="check-enlarge-jp"
        text="Enlarge Japanese Texts"
        v-model="appOptions.enlargeJapaneseText.active" />
      <ActionSlider
        id="slider-jp-size"
        text="Size (em)"
        :disabled="!appOptions.enlargeJapaneseText.active"
        v-model="appOptions.enlargeJapaneseText.largeSize" />

      <ActionCheckbox
        id="check-enlarge-en"
        text="Enlarge English Texts"
        v-model="appOptions.enlargeEnglishText.active" />
      <ActionSlider
        id="slider-en-size"
        text="Size (em)"
        :disabled="!appOptions.enlargeEnglishText.active"
        v-model="appOptions.enlargeEnglishText.largeSize" />
    </SectionItem>

    <SectionItem icon="tabler:cube" :background="true">
      <template #heading>Other</template>
      <ActionButton
        @click="clearLocalStorage()"
        id="clear-local-storage"
        text="Clear localStorage"
        icon="tabler:trash" />
    </SectionItem>
  </div>
</template>

<style lang="scss">
.options-view {
  & > * + * {
    margin-top: 1em;
  }

  & #clear-local-storage {
    padding: 0.4em 0.6em;
    border-radius: 7px;
    background: hsl(0, 57%, 48%);
  }
}
</style>
