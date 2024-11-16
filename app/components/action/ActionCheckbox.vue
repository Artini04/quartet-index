<script setup lang="ts">
interface CheckboxProps {
  id: string
  text: string
  subtext?: string
}

defineProps<CheckboxProps>()
const checkboxModel = defineModel({ type: Boolean })
</script>

<template>
  <ActionBase>
    <template #label>
      <label :for="id">
        <span>{{ text }}</span>
        <span class="subtext" v-if="subtext">{{ subtext }}</span>
      </label>
    </template>

    <template #element>
      <input :id :name="id" type="checkbox" v-model="checkboxModel" />
    </template>
  </ActionBase>
</template>
