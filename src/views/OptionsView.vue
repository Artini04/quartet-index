<script setup lang="ts">
import { appOptions } from '@/fuse'
</script>

<template>
  <main class="option__root | main clamped">
    <div class="option__category | block block-y">
      <h2>Card Preference</h2>
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
