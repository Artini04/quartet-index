<script lang="ts" setup>
import type { Word } from "@/utils/types"

const { data } = defineProps<Word>()
const { appOptions } = storeToRefs(useApplicationStore())
</script>

<template>
  <div class="word-card">
    <!-- INFO -->
    <WordCardInfo
      :lesson="info.lesson"
      :reading="info.reading"
      :kanji="info.kanji"
      :location="info.letter_location" />

    <!-- CONTENT -->
    <WordCardContent
      :jp-text="data.ja_kana_kanji ?? data.ja_hiragana"
      :jp-subtext="data.ja_kana_kanji ? data.ja_hiragana : null"
      :jp-suru="data.ja_suru"
      :jp-particle="data.ja_particle"
      :mn-meaning="data.en_meaning.join('; ')"
      :mn-verb-type="data.en_verb_type" />

    <!-- LINKS -->
    <WordDicts
      v-if="appOptions.showDictionary"
      :search="data.ja_kana_kanji ?? data.ja_hiragana" />
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/modules/utilities" as util;

.word-card {
  --base-border: hsl(0, 0%, 23%);
  --base-border-radius: var(--shared-border-radius);
  --base-background-odd: hsl(0, 0%, 12%);
  --base-background: hsl(0, 0%, 10%);

  border-radius: var(--base-border-radius);
  border: 1px solid var(--base-border);
  overflow: hidden;

  & > * {
    padding: 0.6rem;
  }

  & > :nth-child(odd) {
    background: var(--base-background-odd);
  }
}
</style>
