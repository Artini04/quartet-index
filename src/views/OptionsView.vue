<script setup lang="ts">
import { debugLinks } from '@/fuse'
</script>

<template>
  <div class="option-root">
    <div class="option-category">
      <h2 class="option-title">Card Preferences</h2>
      <p class="option-subtitle">Options about the card</p>

      <div class="option-cell">
        <input id="show-dict-links" type="checkbox" v-model="debugLinks" />
        <label for="show-dict-links">Show dictionary links</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.option {
  &-root {
    width: var(--component-limit-width);
    max-width: var(--component-limit-width-clamp);
    margin-inline: auto;

    & > * + * {
      margin-top: 2rem;
    }
  }

  &-category {
    & > * + * {
      margin-top: 0.5rem;
    }
  }

  &-cell {
    & > * + * {
      margin-left: 0.5rem;
    }
  }
}
</style>
