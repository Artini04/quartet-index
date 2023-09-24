<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { fetchFromDictAsTable } from '@/fuse'

const selectedLesson: Ref<string> = ref('0')

watch(selectedLesson, (lesson) => {
  fetchFromDictAsTable(lesson)
})
</script>

<template>
  <div class="table-search-root clamped">
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
select {
  appearance: none;
  width: 100%;
  height: 100%;
  color: inherit;

  border-radius: var(--component-border-radius);
}
</style>
