<script setup lang="ts">
import LegendComp from '@/components/LegendComp.vue'
</script>

<template>
  <main class="about__root | main clamped">
    <div class="about__banner | block-y">
      <h2>TOKA「トカ」Pocket Quartet</h2>
      <p>A small Quartet Vocabulary Index Dictionary written in Vue.</p>
      <p>
        Lesson number are colored based on their respective book color. I also added links from
        English-Japanese dictionaries to access them easier. You can turn them off in the options.
      </p>
      <p>
        Words used are from the book QUARTET: INTERMEDIATE JAPANESE ACROSS THE FOUR LANGUAGE SKILLS.
        You can download the spreadsheet in their
        <a href="https://quartet.japantimes.co.jp/en/resource/" target="_blank">resources</a>
        website under Index section.
      </p>
    </div>

    <div class="about__block | block-y">
      <h2>漢字／単語</h2>
      <LegendComp />
    </div>
  </main>
</template>

<style lang="scss">
.about {
  &__root {
    & > * + * {
      margin-top: 4rem;
    }
  }

  &__plans {
    li::before {
      content: '\FF03';
      margin-right: 0.5rem;
    }
  }
}
</style>
