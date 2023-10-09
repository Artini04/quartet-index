<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

import InputRouteButton from './input/InputRouteButton.vue'

interface Props {
  to: {
    name: string
    icon: string
    to: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <nav class="block-y nav__root">
    <InputRouteButton v-for="item in to" :text="item.name" :icon="item.icon" :to="item.to" />
  </nav>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.nav {
  &__root {
    @include flex(row, wrap, 1rem);
    @include item_alignment(center, center);
  }
}
</style>
