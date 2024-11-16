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
  <div class="action action-checkbox">
    <input type="checkbox" :id v-model="checkboxModel" />
    <label class="action-checkbox__label" :for="id">
      <span>{{ text }}</span>
      <span class="subtext" v-if="subtext">{{ subtext }}</span>
    </label>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/modules/root" as rt;
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$check-gap: 1em;
$desc-gap: 0;

.action-checkbox {
  @include ut.flex(row, nowrap, $check-gap);

  &,
  & input,
  &__label {
    cursor: pointer;
  }

  &__label {
    @include ut.flex(column, nowrap, $desc-gap);
    user-select: none;
  }
}
</style>
