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
          value="Home (↗Lookup)"
          icon="tabler:circle-arrow-up-right-filled"
          src="/" />
        <LinkButton
          id="normal"
          variant="full-active"
          :isRouterLink="true"
          value="Lookup"
          icon="tabler:list-search"
          src="/lookup/normal" />
        <LinkButton
          id="table"
          variant="full-active"
          :isRouterLink="true"
          value="Lesson Lookup"
          icon="tabler:table-filled"
          src="/lookup/lesson" />
        <LinkButton
          id="options"
          variant="full-active"
          :isRouterLink="true"
          value="Options"
          icon="tabler:settings"
          src="/options" />
        <LinkButton
          id="about"
          variant="full-active"
          :isRouterLink="true"
          value="About"
          icon="tabler:paperclip"
          src="/about" />
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
