<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header-root">
    <div class="header-title">
      <h1>日本語カルテット単語索引</h1>
      <h2>Quartet Vocabulary Index</h2>
    </div>
    <div class="header-note">
      <p>
        Japanese Quartet Vocabulary Index written in Vue3. Cards are colored based on their
        respective book color. I added links from English-Japanese dictionaries to access them
        easily.
      </p>
    </div>
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
    margin: 1rem auto 0;

    & > * {
      & + * {
        margin-top: var(--component-spacing);
      }
    }
  }

  &-title {
    text-align: center;

    h1 {
      font-size: 1.5rem;
    }
  }

  &-note {
    text-align: justify;
  }

  &-nav {
    text-align: right;

    & > * + * {
      margin-left: 0.5rem;
    }
  }
}
</style>
