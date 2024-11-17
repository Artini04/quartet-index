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
  <div class="action-checkbox">
    <input :id :name="id" type="checkbox" v-model="checkboxModel" />
    <label :for="id">
      <span>{{ text }}</span>
      <span class="subtext" v-if="subtext">{{ subtext }}</span>
    </label>
  </div>
</template>

<style lang="scss">
// PROPERTIES
$spacing: 0.6em;

.action-checkbox {
  & {
    @include util.flex(row, nowrap, $spacing);
    @include util.flex-align(center);
  }

  label span {
    display: block;
  }
}
</style>
