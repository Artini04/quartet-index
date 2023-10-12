<script setup lang="ts">
import { search_query } from '@/fuse'
import { Icon } from '@iconify/vue'
import InputWrapper from '../input/InputWrapper.vue'
</script>

<template>
  <div class="search__root clamped">
    <InputWrapper class="search__box" role="searchbox">
      <Icon icon="tabler:list-search" />
      <input
        type="text"
        name="search-query"
        placeholder="Search for..."
        autocomplete="off"
        v-model.lazy="search_query"
      />
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
