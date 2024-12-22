<script lang="ts" setup></script>

<template>
  <header class="toolbox-header">
    <h1 jp>日本語カルテット単語索引</h1>
    <nav class="navigation-wrapper">
      <ActionLinkRoute to="/" icon="tabler:search" text="Lookup" />
      <ActionLinkRoute to="/options" icon="tabler:settings" text="Options" />
      <ActionLinkRoute to="/about" icon="tabler:paperclip" text="About" />
    </nav>
  </header>
</template>

<style lang="scss">
.toolbox-header {
  margin-bottom: 1em;
  text-align: center;

  & .navigation-wrapper {
    @include util.use-flex(row, wrap, 0.6em);
    & > * {
      flex: 1 1;
    }
  }
}
</style>
