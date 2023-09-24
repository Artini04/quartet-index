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
@import '@/assets/mixins';

.search {
  &-root {
    @include flex(row, nowrap, 0.5rem);
  }

  &-box {
    @include flex(row, nowrap, 0.5rem);
    @include item_alignment(center, center);
    flex-grow: 1;
  }

  &-button {
    flex-basis: 100px;
  }
}
</style>
