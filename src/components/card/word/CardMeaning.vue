<script setup lang="ts">
defineProps<{
  meaning: string[]
  additional: string | null
}>()
</script>

<template>
  <div class="card-meaning">
    <div class="meaning" v-for="item in meaning" :key="item">
      <span class="en">{{ item }}</span>
      <span class="en-add" v-if="additional">[{{ additional }}]</span>
    </div>
  </div>
</template>

<style lang="scss">
.meaning {
  display: block;

  &::before {
    content: var(--en-symbol);
    margin-right: 0.5rem;
  }

  .en {
    &-add {
      font-style: italic;
    }
  }
}
</style>
