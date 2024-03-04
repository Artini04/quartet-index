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

<style lang="scss">
@use '@/assets/modules/mixins' as mx;
@use '@/assets/modules/colors';

.link-button {
  @include mx.onPress(0.95);
  @include mx.transition('scale', 200ms);

  text-decoration: none;
  padding: 0.2rem 0.6rem 0.3rem;
  border-radius: 7px;
  user-select: none;

  & > * + * {
    margin-left: 0.4rem;
  }
}

:root[data-theme='light'] {
  .router-link-active {
    background: colors.$c-blk;
    color: colors.$c-wht;
  }
}

:root[data-theme='dark'] {
  .router-link-active {
    background: colors.$c-wht;
    color: colors.$c-blk;
  }
}
</style>
