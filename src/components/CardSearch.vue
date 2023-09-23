<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { fetchFromDict } from '@/fuse'
import { Icon } from '@iconify/vue'

import InputWrapper from './input/InputWrapper.vue'

const inputSearch: Ref<string> = ref('')
</script>

<template>
  <div class="search-root clamped">
    <InputWrapper class="search-box">
      <template v-slot:input>
        <Icon icon="tabler:search" />
        <input
          class="search-query"
          type="text"
          placeholder="Search..."
          v-model="inputSearch"
          @keypress.enter.prevent="fetchFromDict(inputSearch)"
        />
      </template>
    </InputWrapper>

    <InputWrapper class="search-button">
      <template v-slot:input>
        <input
          class="search-button__btn"
          type="button"
          value="Search"
          @click.prevent="fetchFromDict(inputSearch)"
        />
      </template>
    </InputWrapper>
  </div>
</template>

<style lang="scss">
.search {
  &-root {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.4rem;

    input {
      &[type='button'] {
        cursor: pointer;
      }
    }
  }

  &-box {
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;

    align-items: center;
    justify-content: center;
  }

  &-button {
    flex-basis: 100px;
  }

  &-div {



    &[button='true'] {
      padding: 0;

      input[type='button'] {
        padding: var(--component-padding);
      }

      &:active {
        scale: 0.95;
      }

      &:hover {
        background-color: var(--component-input-active);
      }
    }

    &:focus-within {
      outline: 1px solid white;
    }
  }
}
</style>
