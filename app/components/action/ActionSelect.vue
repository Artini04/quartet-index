<script setup lang="ts">
defineProps<{ id: string; text: string; subtext?: string }>()
const selectModel = defineModel()
</script>

<template>
  <div class="action-select">
    <label :for="id">
      <span>{{ text }}</span>
      <span class="subtext" v-if="subtext">{{ subtext }}</span>
    </label>

    <div class="action-select__select">
      <Icon name="tabler:menu-2" />
      <select :id :name="id" v-model="selectModel">
        <slot />
      </select>
    </div>
  </div>
</template>

<style lang="scss">
// PROPERTIES
$spacing: 0.6em;
$padding: 0.4em 0.6em;

// COLORS
$primary: light-dark(red, root.$black-dark-00);
$border: light-dark(red, root.$black-dark-00-m);
$border-focus: light-dark(red, root.$black-dark-00-h);

.action-select {
  & {
    @include util.flex(row, wrap, $spacing);
  }

  &__select {
    padding: $padding;
    width: 100%;

    &,
    select {
      background: $primary;
    }

    & {
      @include util.flex(row, nowrap, $spacing);
      @include util.flex-align(center);
      @include util.animation("border");
      @include util.with-border();
      @include util.with-hover(border-color, $border, $border-focus);
    }

    select {
      flex: 999 1;
      appearance: none;
    }
  }

  label span {
    display: block;
  }
}
</style>
