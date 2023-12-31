<script setup lang="ts">
// Component Import/s
import LegendComp from '@/components/LegendComp.vue'
</script>

<template>
  <main class="about | clamped">
    <div class="about__banner">
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

    <div class="about__box">
      <LegendComp />
    </div>
  </main>
</template>

<style lang="scss">
@use '@/assets/mixins' as _mixins;

$about-spacing: 4rem;
$banner-spacing: 0.5rem;

.about {
  @include _mixins.spacing($about-spacing, y, block);

  &__banner {
    @include _mixins.spacing($banner-spacing, y, block);
  }

  &__plans {
    li::before {
      content: '\FF03';
      margin-right: 0.5rem;
    }
  }
}
</style>
