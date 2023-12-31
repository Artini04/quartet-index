<script setup lang="ts">
import { useOptionsStore } from '@/stores/options'

// Component Imports
import OptionsCategory from '@/components/layout/OptionsCategory.vue'
import InputButtonWrapper from '@/components/input/InputButtonWrapper.vue'
import InputCheckboxWrapper from '@/components/input/InputCheckboxWrapper.vue'

const options = useOptionsStore()
const { clearLocalStorage } = options
</script>

<template>
  <main class="options | clamped">
    <h2 class="options__title">Options</h2>

    <div class="options__box | border-rounded-square">
      <!-- Theme Options -->
      <OptionsCategory>
        <h3>Theme</h3>
        <template v-slot:options>
          <InputButtonWrapper variant="filled" :properties="{ text: 'Light', icon: 'tabler:sun-filled' }"
            @click="options.app_theme = 'light'" />
          <InputButtonWrapper variant="filled" :properties="{ text: 'Dark', icon: 'tabler:moon-filled' }"
            @click="options.app_theme = 'dark'" />
        </template>
      </OptionsCategory>

      <!-- Card Options -->
      <OptionsCategory>
        <h3>Card Preferences</h3>
        <InputCheckboxWrapper id="show_dictionary_links"
          :properties="{ text: 'Show dictionary links', icon: 'tabler:link' }">
          <input type="checkbox" id="show_dictionary_links" v-model="options.card_show_links" />
        </InputCheckboxWrapper>
      </OptionsCategory>
    </div>

    <div class="options__box | border-rounded-square" v-auto-animate>

      <!-- Local Storage Options -->
      <OptionsCategory>

        <template v-slot:options>
          <h3>Local Storage</h3>
          <p>In-case something's not working. Clear local storage!</p>
          <InputButtonWrapper variant="filled" color="red"
            :properties="{ text: 'Clear <code>localStorage</code>', icon: 'tabler:trash' }"
            @click="clearLocalStorage()" />
        </template>
      </OptionsCategory>
    </div>
  </main>
</template>
<style lang="scss">
@use '@/assets/mixins' as _mixins;

// Options Color Properties
$background-color: var(--component-box-background-color);

// Options Properties
$options-spacing: 1rem;
$options-sub-spacing: 2rem;

.options {
  @include _mixins.spacing($options-spacing, y, block);

  &__title {
    text-align: center;
  }

  &__box {
    @include _mixins.spacing($options-sub-spacing, y, block);

    padding: 1rem;
    background: $background-color;
  }
}
</style>
