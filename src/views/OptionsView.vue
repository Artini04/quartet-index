<script setup lang="ts">
import { appOptions } from '@/fuse'
</script>

<template>
  <main class="option__root | main clamped">
    <h2>Options</h2>

    <div class="option__category | block block-y radius">
      <h3>Card Preference</h3>
      <div class="block-x">
        <input
          id="show-dict-links"
          type="checkbox"
          v-model="appOptions['cardOptions']['showLinks']"
        />
        <label for="show-dict-links">Show dictionary links</label>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@import '@/assets/mixins.scss';

.option {
  &__root {
    h2 {
      text-align: center;
    }
  }

  &__category {
    padding: 1rem;
    background: var(--app-accent-color-muted);
  }

  &__theme {
    @include flex(row, wrap, 0.5rem);
  }
}
</style>
