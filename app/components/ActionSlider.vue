<script lang="ts" setup>
interface Props {
  id: string
  text: string
  disabled?: boolean
}

const { disabled = false } = defineProps<Props>()
const sliderModel = defineModel()
</script>

<template>
  <label class="action-slider" :class="{ disabled: disabled }" :for="id">
    <input
      :id
      type="range"
      :name="id"
      min="1"
      max="2"
      step="0.1"
      :disabled="disabled"
      v-model="sliderModel" />
    <span class="number">{{ sliderModel }}</span>
    <span>{{ text }}</span>
  </label>
</template>

<style lang="scss">
.action-slider {
  @include util.with-icon();
}
</style>
