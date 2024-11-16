<script setup lang="ts">
interface SelectProps {
  id: string
  text: string
  subtext?: string
}

defineProps<SelectProps>()
const selectModel = defineModel()
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
      <select :id :name="id" v-model="selectModel">
        <slot />
      </select>
    </template>
  </ActionBase>
</template>

<style scoped lang="scss">
@use "~/assets/style/modules/root" as rt;
@use "~/assets/style/modules/utilities" as ut;

// PROPERTIES
$select-padding: 0.6em;

// COLOR
$select-background-color: light-dark(white, rt.$black-01);
$select-border-color: light-dark(black, rt.$black-03);
$select-border-color-focus: light-dark(green, rt.$green-01);

select {
  @include ut.with-border();
  border-color: $select-border-color;
  @include ut.animation("border");

  padding: $select-padding;
  appearance: none;
  background: $select-background-color;

  &:focus-within {
    outline: 2px solid $select-border-color-focus;
    border-color: $select-border-color-focus;
  }
}
</style>
