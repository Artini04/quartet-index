<script setup lang="ts">
interface SelectProps {
  id: string
  text: string
  subtext?: string
}

const selectModel = defineModel()
defineProps<SelectProps>()
</script>

<template>
  <div class="action action-select">
    <select :id :name="id" v-model="selectModel">
      <slot></slot>
    </select>
    <label :for="id">
      <span>{{ text }}</span>
      <span class="subtext" v-if="subtext">{{ subtext }}</span>
    </label>
  </div>
</template>
