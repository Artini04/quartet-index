<script lang="ts" setup>
interface Props {
  id: string
  text?: string
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <button class="action-button" :id>
    <Icon :name="icon" v-if="icon" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style lang="scss">
.action-button {
  cursor: pointer;
  @include util.with-icon();
}
</style>
