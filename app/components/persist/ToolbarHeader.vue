<script lang="ts" setup></script>

<template>
  <header class="toolbar-header">
    <div class="toolbar-header__links">
      <h1 class="nav-header">日本語カルテット単語索引</h1>
      <nav class="nav-list">
        <ActionPageRoute
          :to="{ path: '/' }"
          icon="tabler:search"
          text="Lookup" />
        <ActionPageRoute
          :to="{ path: '/options' }"
          icon="tabler:settings"
          text="Preferences" />
        <ActionPageRoute
          :to="{ path: '/about' }"
          icon="tabler:paperclip"
          text="About" />
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@use "~/assets/styles/modules/layouts";
@use "~/assets/styles/modules/utilities" as util;

.toolbar-header {
  @extend %grid;
  margin-block: 1em;
}

.toolbar-header__links {
  @extend %grid-content;
}

.toolbar-header__links {
  --flex-gap: 0.6em;
  @extend %flex;

  & .nav-header {
    flex: 99 1 auto;

    @include util.use-break() {
      text-align: center;
    }
  }

  & .nav-list {
    flex: 1 1 auto;

    --flex-gap: 0.6em;

    @extend %flex;
    align-items: stretch;
    justify-content: stretch;

    & > * {
      flex: 1 1 auto;
    }
  }

  @include util.use-break() {
    --flex-dir: column;
  }
}
</style>
