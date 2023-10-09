<script setup lang="ts">
import LegendComp from '@/components/LegendComp.vue'
</script>

<template>
  <main class="main clamped about__root">
    <div class="about__banner">
      <h1>TOKA「トカ」Pocket Quartet</h1>
    </div>

    <div class="block-y about__block">
      <p>
        Japanese Quartet Vocabulary Index written in Vue3. Cards are colored based on their
        respective book color. I added links from English-Japanese dictionaries to access them
        easily.
      </p>
    </div>

    <div class="block-y about__block">
      <h2>More here?</h2>
      <p>TODO</p>
    </div>

    <div class="block-y about__block">
      <h2>Legend</h2>
      <LegendComp />
      <p>MORE TODO</p>
    </div>
  </main>
</template>

<style lang="scss">
.about {
  &__block {
    p {
      margin-left: 1.2rem;
    }
  }
}
</style>
