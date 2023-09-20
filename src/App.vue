<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="navigation__root">
    <RouterLink to="/search">Search</RouterLink>
  </div>
  <RouterView />
</template>

<style lang="scss">
.navigation {
  &__root {
    width: calc(100% - 2rem);
    margin-inline: auto;
  }
}
</style>
