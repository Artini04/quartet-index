<script setup lang="ts">
import 'iconify-icon'
import { RouterLink } from 'vue-router'

interface Props {
  id: string
  props: {
    text: string
    icon?: string
  }
  link: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="link" class="link-button">
    <iconify-icon :icon="props.icon" v-if="props.icon"></iconify-icon>
    <span>{{ props.text }}</span>
  </RouterLink>
</template>

<style scoped lang="scss">
@use '@/assets/modules/mixins' as mx;

$bg-color: var(--component-wrapper-background-color, white);
$font-color: var(--component-wrapper-font-color, black);

.link-button {
  @include mx.transition($properties: 'background, color', $duration: 200ms);
  text-decoration: none;
  padding: 0.2rem 0.6rem 0.3rem;
  border-radius: 7px;
  white-space: nowrap;
  user-select: none;

  & > * + * {
    margin-left: 0.4rem;
  }
}

.router-link-active {
  background: $bg-color;
  color: $font-color;
}
</style>
