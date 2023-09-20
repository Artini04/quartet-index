<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header-root">
    <nav class="header-nav">
      <RouterLink to="/">Search</RouterLink>
      <RouterLink to="/options">Options</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  &-root {
    width: var(--component-limit-width);
    max-width: var(--component-limit-width-clamp);
    margin-inline: auto;

    & > * {
      & + * {
        margin-top: var(--component-spacing);
      }
    }
  }

  &-nav {
    & > * + * {
      margin-left: 0.5rem;
    }
  }
}
</style>
