<script setup lang="ts">
import { shallowRef, type Ref } from 'vue'
import { searchIndex } from '@/fuse'
import { Icon } from '@iconify/vue'
import InputWrapper from '../input/InputWrapper.vue'

const inputSearch: Ref<string> = shallowRef('')
</script>

<template>
  <div class="search__root clamped">
    <InputWrapper class="search__box">
      <Icon icon="tabler:arrow-big-down-filled" />
      <input
        type="text"
        name="search-query"
        placeholder="Search for..."
        autocomplete="off"
        v-model="inputSearch"
        @keypress.enter="searchIndex(inputSearch)"
      />
    </InputWrapper>

    <InputWrapper class="search__button">
      <input type="button" value="Search" @click="searchIndex(inputSearch)" />
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

    &:is(:active) {
      scale: 0.95;
    }
  }
}
</style>
