<script setup lang="ts">
import { app_theme, card_show_links } from '@/fuse'
import InputButton from '@/components/input/InputButton.vue'

function setTheme(theme: string) {
  app_theme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <main class="option__root | main clamped">
    <h2>Options</h2>

    <div class="option__category | block block-y radius">
      <h3>Theme</h3>
      <div class="block block-y">
        <InputButton
          variant="filled"
          :properties="{ value: 'Light [WIP]', icon: 'tabler:sun-filled' }"
          @click="setTheme('light')"
        />
        <InputButton
          variant="filled"
          :properties="{ value: 'Dark', icon: 'tabler:moon-filled' }"
          @click="setTheme('dark')"
        />
      </div>
    </div>

    <div class="option__category | block block-y radius">
      <h3>Card Preference</h3>
      <div class="block-x">
        <input id="show-dict-links" type="checkbox" v-model.lazy="card_show_links" />
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
