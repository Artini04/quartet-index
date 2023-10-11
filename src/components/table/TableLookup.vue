<script setup lang="ts">
// TODO: REFACTOR
import { ref, watch, type Ref } from 'vue'
import { fetchFromDictAsTable } from '@/fuse'

const selectedLesson: Ref<number> = ref(0)

watch(selectedLesson, (lesson) => {
  fetchFromDictAsTable(lesson)
})
</script>

<template>
  <div class="table-search__root | clamped radius">
    <div class="input-wrapper">
      <select v-model.lazy="selectedLesson">
        <option value="0" selected>Select lesson</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss">
$block: 0.4rem;
$inline: 0.6rem;

.table-search {
  &__root {
    overflow: hidden;
    padding-inline: $inline;

    background: var(--component-background-color);
    color: var(--component-font-color);

    select {
      width: 100%;
      padding-block: $block;
    }
  }
}
</style>
