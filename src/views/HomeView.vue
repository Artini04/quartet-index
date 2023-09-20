<script setup lang="ts"></script>

<template>
  <div class="home-root">
    <h1>Hello!</h1>
    <p class="header__note">
      Japanese Quartet Vocabulary Index written in Vue3. Cards are colored based on their respective
      book color. I added links from English-Japanese dictionaries to access them easily.
    </p>
  </div>
</template>

<style lang="scss">
.home {
  &-root {
    width: var(--component-limit-width);
    max-width: var(--component-limit-width-clamp);
    margin-inline: auto;
  }
}
</style>
