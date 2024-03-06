<script setup lang="ts">
import 'iconify-icon'
import LinkButton from './action/LinkButton.vue'
</script>

<template>
  <header class="flow-wf">
    <div class="header-title">
      <h1>「トカ」Quartet Vocabulary Index</h1>
    </div>

    <div>
      <div class="link-list">
        <LinkButton
          id="home"
          variant="full-active"
          :isRouterLink="true"
          :props="{
            text: 'Home (↗Lookup)',
            icon: 'tabler:circle-arrow-up-right-filled',
            link: '/',
          }" />
        <LinkButton
          id="normal"
          variant="full-active"
          :isRouterLink="true"
          :props="{
            text: 'Lookup',
            icon: 'tabler:list-search',
            link: '/lookup/normal',
          }" />
        <LinkButton
          id="table"
          variant="full-active"
          :isRouterLink="true"
          :props="{
            text: 'Lesson Lookup',
            icon: 'tabler:table-filled',
            link: '/lookup/lesson',
          }"
          link="/lookup/lesson" />
        <LinkButton
          id="options"
          variant="full-active"
          :isRouterLink="true"
          :props="{
            text: 'Options',
            icon: 'tabler:settings',
            link: '/options',
          }" />
        <LinkButton
          id="about"
          variant="full-active"
          :isRouterLink="true"
          :props="{
            text: 'About',
            icon: 'tabler:paperclip',
            link: '/about',
          }" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  margin-top: 1rem;
}

.header-title {
  text-align: center;
  text-wrap: balance;
}

.link-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.2rem 0.4rem;
}
</style>
