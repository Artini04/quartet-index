<script setup lang="ts">
import { shallowRef, type Ref } from 'vue'
import { search_query } from '@/fuse'
import { Icon } from '@iconify/vue'
import InputWrapper from '../input/InputWrapper.vue'

const search_query_init: Ref<string> = shallowRef('')
const search_element = shallowRef()

function search() {
  search_query.value = search_query_init.value

  if ('ontouchstart' in document.documentElement) {
    const element = search_element.value as HTMLInputElement
    element.blur()
  }
}
</script>

<template>
  <div class="search__root clamped">
    <InputWrapper class="search__box" role="searchbox">
      <Icon icon="tabler:list-search" />
      <input
        type="search"
        name="search-query"
        placeholder="Search for..."
        autocomplete="off"
        @keypress.enter="search()"
        v-model="search_query_init"
        ref="search_element"
      />
    </InputWrapper>

    <InputWrapper class="search__button" role="button">
      <input type="button" value="Search" @click="search_query = search_query_init" />
    </InputWrapper>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.search {
  &__root {
    @include flex(row, nowrap, 0.5rem);
  }

  &__box {
    @include flex(row, nowrap, 0.5rem);
    @include item_alignment(center, flex-start);
    flex: 1 1 70%;
  }

  &__button {
    flex: 1 0 50px;
  }
}
</style>
