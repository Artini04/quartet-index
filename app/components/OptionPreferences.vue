<script setup lang="ts">
const { appDictionary } = useLookup()
const { appOptions } = useOptions()

function clearLocalStorage() {
  localStorage.clear()
}
</script>

<template>
  <SectorDetails
    class="top-sector-details"
    icon="tabler:settings"
    text="アプリの設定"
  >
    <SectorDetails icon="tabler:stack-2" text="Card Preferences">
      <ActionCheckbox
        v-model="appOptions.wordShowDicts"
        id="check-show-links"
        text="Dictionary Links"
        subtext="Show dictionary links at the bottom of the word card."
      />
      <ActionCheckbox
        v-model="appOptions.otherLinkDecor"
        id="check-show-decor"
        text="External Link Underline"
        subtext="Show the underline decoration from external links."
      />
    </SectorDetails>

    <SectorDetails icon="tabler:text-size" text="Text Preferences">
      <ActionCheckbox
        v-model="appOptions.wordBiggerJpText"
        id="check-bigger-jp"
        text="Enlarge Japanese Texts"
      />
      <ActionCheckbox
        v-model="appOptions.wordBiggerEnText"
        id="check-bigger-en"
        text="Enlarge English Texts"
      />
    </SectorDetails>

    <SectorDetails icon="tabler:list-search" text="Lookup Preferences">
      <ActionSelect
        v-model="appDictionary.limit"
        id="select-limit"
        text="Limit"
        subtext="Set the lookup limit. This will automatically search the dictionary again."
      >
        <option :value="10">Default (10)</option>
        <option :value="20">Many (20)</option>
        <option :value="30">Excessive (30)</option>
      </ActionSelect>
    </SectorDetails>

    <SectorDetails icon="tabler:database" text="Storage">
      <ActionButton
        id="click-clear-storage"
        text="Clear localStorage"
        :opt="{ isAlert: true }"
        @click="clearLocalStorage()"
      />
    </SectorDetails>
  </SectorDetails>
</template>

<style lang="scss">
.top-sector-details {
  & > div {
    @include util.space(margin-top, 0.6em);
  }
}
</style>
