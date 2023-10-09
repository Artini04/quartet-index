<script setup lang="ts">
defineProps<{
  id: number
  lesson: number
  reading: number
  recommended: string
}>()
</script>

<template>
  <div class="card-info">
    <span class="id">{{ id }}</span>
    <span class="lesson" :vol="lesson >= 7 ? 2 : 1">Lesson {{ lesson }}</span>
    <span class="reading">読み{{ reading }}</span>
    <span class="recommend">{{ recommended }}</span>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.card-info {
  @include flex(row, nowrap, 1rem);
  @include item_alignment(center, center);
  @include box(0.5rem);
  background-color: rgba($color: #000000, $alpha: 0.2);

  .lesson,
  .reading {
    flex-grow: 1;
  }

  .lesson {
    
  }

  .reading {
    text-align: right;
  }

  .recommend {
    flex-shrink: 1;
  }

  .id {
    flex: 0 1 40px;
    font-family: monospace;
    text-align: center;
    background-color: #3f3f3f;
    border-radius: var(--component-border-radius);
  }
}
</style>
