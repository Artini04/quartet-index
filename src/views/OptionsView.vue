<script setup lang="ts">
import { appOptions } from '@/fuse'
</script>

<template>
  <main class="option-root clamped">
    <div class="option-category">
      <h2 class="option-title">Card Preference</h2>

      <div class="option-cell">
        <input id="show-dict-links" type="checkbox" v-model="appOptions['showLinks']" />
        <label for="show-dict-links">Show dictionary links</label>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/mixins';

.option {
  &-root {
    @include default_box;
    background-color: var(--component-background-color);
  }

  &-category {
    @include margin_top(0.5rem);
  }

  &-cell {
    @include margin_left(0.5rem);
  }
}
</style>
