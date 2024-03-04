<script setup lang="ts">
import 'iconify-icon'
import LinkButton from './action/LinkButton.vue'
</script>

<template>
  <header>
    <div class="header-title">
      <h1>「トカ」Quartet Vocabulary Index</h1>
    </div>

    <div>
      <div class="link-list">
        <LinkButton
          id="home"
          :props="{
            text: 'Home (↗Lookup)',
            icon: 'tabler:circle-arrow-up-right-filled',
          }"
          link="/" />
        <LinkButton
          id="normal"
          :props="{ text: 'Lookup', icon: 'tabler:list-search' }"
          link="/lookup/normal" />
        <LinkButton
          id="table"
          :props="{ text: 'Lesson Lookup', icon: 'tabler:table-filled' }"
          link="/lookup/lesson" />
        <LinkButton
          id="options"
          :props="{ text: 'Options', icon: 'tabler:settings' }"
          link="/options" />
        <LinkButton
          id="about"
          :props="{ text: 'About', icon: 'tabler:paperclip' }"
          link="/about" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/modules/composition' as cm;

header {
  @include cm.spaced($gap: 1rem);

  margin-top: 1rem;
}

.header-title {
  text-align: center;
  text-wrap: balance;
}

.link-list {
  // @include cm.spaced($direction: 'inline', $auto: true);
  // flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.2rem 0.4rem;
}
</style>
