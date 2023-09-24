<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{
  icon_name: string
  text: string
}>()
</script>

<template>
  <div class="service-wrapper">
    <Icon :icon="icon_name" />
    <span>{{ text }}</span>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';

.service-wrapper {
  display: block;
  line-height: 1.5rem;

  svg {
    @include svg(1rem);
  }
}
</style>
