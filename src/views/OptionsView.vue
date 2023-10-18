<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

// Component Imports
import OptionsCategory from '@/components/layout/OptionsCategory.vue'
import InputButtonWrapper from '@/components/input/InputButtonWrapper.vue'
import InputCheckboxWrapper from '@/components/input/InputCheckboxWrapper.vue'

const options = useOptionsStore()
const { clearLocalStorage, testConsole } = options
</script>

<template>
  <main class="options | main clamped">
    <h2>Options</h2>

    <div class="options__box | border-rounded-square">
      <OptionsCategory>
        <h3>Theme</h3>

        <template v-slot:options>
          <InputButtonWrapper
            variant="filled"
            :properties="{ text: 'Light', icon: 'tabler:sun-filled' }"
            @click="options.app_theme = 'light'" />
          <InputButtonWrapper
            variant="filled"
            :properties="{ text: 'Dark', icon: 'tabler:moon-filled' }"
            @click="options.app_theme = 'dark'" />
        </template>
      </OptionsCategory>

      <OptionsCategory>
        <h3>Card Preferences</h3>
        <InputCheckboxWrapper
          id="show_dictionary_links"
          :properties="{ text: 'Show dictionary links', icon: 'tabler:link' }">
          <input
            type="checkbox"
            id="show_dictionary_links"
            v-model="options.card_show_links" />
        </InputCheckboxWrapper>
      </OptionsCategory>
    </div>

    <div class="options__box | border-rounded-square">
      <OptionsCategory>
        <h3>Development / Debugging</h3>

        <template v-slot:options>
          <InputCheckboxWrapper
            id="debug_mode"
            :properties="{ text: 'Show logged mesages in console', icon: 'tabler:terminal-2' }">
            <input
              type="checkbox"
              id="debug_mode"
              v-model="options.debug_mode" />
          </InputCheckboxWrapper>

          <InputCheckboxWrapper
            id="show-console"
            :properties="{ text: 'Show HTML console', icon: 'tabler:terminal' }">
            <input
              type="checkbox"
              id="show-console"
              v-model="options.show_console" />
          </InputCheckboxWrapper>

          <p>In-case something is not working. Clear local storage!</p>
          <InputButtonWrapper
            variant="filled"
            color="red"
            :properties="{ text: 'Clear <code>localStorage</code>', icon: 'tabler:trash' }"
            @click="clearLocalStorage()" />

          <InputButtonWrapper
            variant="filled"
            :properties="{ text: 'Test HTML console', icon: 'tabler:terminal' }"
            @click="testConsole()" />
        </template>
      </OptionsCategory>

      <OptionsCategory v-if="options.show_console">
        <h3>Console</h3>
        <div class="options__console | border-rounded-square">
          <code v-html="options.html_console"></code>
        </div>
      </OptionsCategory>
    </div>
  </main>
</template>
<style lang="scss">
@import '@/assets/mixins';

$background-color: var(--component-box-background-color);

.options {
  @include spacing(1rem, y);

  h2 {
    text-align: center;
  }

  &__box {
    @include spacing(2rem, y);

    padding: 1rem;
    background: $background-color;
  }

  &__console {
    padding: 0.5rem;

    background: black;
    font-family: 'Courier New', Courier, monospace;

    width: 100%;
    max-height: 200px;
    overflow-y: auto;
  }
}
</style>
