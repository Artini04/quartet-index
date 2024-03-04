<script setup lang="ts">
import { RouterLink } from 'vue-router'
import 'iconify-icon'

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

.link-button {
  @include mx.transition('background, color', 200ms);

  text-decoration: none;
  padding: 0.2rem 0.6rem 0.3rem;
  border-radius: 7px;

  & > iconify-icon {
    margin-bottom: -0.12em;
  }

  & > * + * {
    margin-left: 0.6rem;
  }
}

.router-link-active {
  background: white;
  color: black;
}
</style>
