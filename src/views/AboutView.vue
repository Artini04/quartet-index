<script setup lang="ts">
import LegendComp from '@/components/LegendComp.vue'
</script>

<template>
  <main>
    <section class="about-banner">
      <h2>「トカ」Quartet Vocabulary Index</h2>
    </section>

    <section class="about-section">
      <p>
        A small Quartet Vocabulary Index written in Vue3. Lesson number are
        colored based on their respective book color. I also added links from
        English-Japanese dictionaries to access them easier. You can turn them
        off in the options.
      </p>
      <p>
        Words used are from the book QUARTET: INTERMEDIATE JAPANESE ACROSS THE
        FOUR LANGUAGE SKILLS. You can download the spreadsheet in their
        <a href="https://quartet.japantimes.co.jp/en/resource/" target="_blank">
          resources
        </a>
        website under Index section.
      </p>
    </section>

    <div class="about-legend">
      <LegendComp />
    </div>
  </main>
</template>

<style lang="scss">
@use '@/assets/modules/composition' as cm;

.about {
  &-section {
    @include cm.spaced($direction: block, $gap: 0.4rem);
    text-indent: 1.2em;
    text-wrap: pretty;
  }
}
</style>
