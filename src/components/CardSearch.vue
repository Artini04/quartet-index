<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { fetchFromDict } from '@/fuse'
import { Icon } from '@iconify/vue'

const inputSearch: Ref<string> = ref('good')
</script>

<template>
  <div class="search-root">
    <div class="search-box search-div">
      <Icon icon="tabler:search" />
      <input
        class="search-query"
        type="text"
        placeholder="Search..."
        v-model="inputSearch"
        @keypress.enter.prevent="fetchFromDict(inputSearch)"
      />
    </div>

    <div class="search-button search-div" button="true">
      <input
        class="search-button__btn"
        type="button"
        value="Search"
        @click.prevent="fetchFromDict(inputSearch)"
      />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --component-input-bg: #40464d;
  --component-input-active: #797c85;
  --component-input-disabled: #2d333a;
  --component-input-font-disabled: #546572;
}

.search {
  $padding-component: 0.7rem;

  &-root {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    font-size: 1rem;
    max-width: var(--component-limit-width-clamp);
    margin-inline: auto;

    & > * {
      flex-grow: 1;
    }

    input {
      background-color: transparent;
      padding: $padding-component 0;
      color: inherit;
      font-family: inherit;
      font-size: inherit;

      width: 100%;
      border-radius: 5px;
      transition:
        background ease 200ms,
        scale ease 100ms;

      &[type='button'] {
        cursor: pointer;
      }
    }
  }

  &-box {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;

    align-items: center;
    justify-content: center;
  }

  &-div {
    background-color: var(--component-input-bg);
    border-radius: 7px;
    padding: 0 $padding-component;

    transition:
      background ease 200ms,
      scale ease 100ms;

    &[button='true'] {
      padding: 0;

      input[type='button'] {
        padding: $padding-component;
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
