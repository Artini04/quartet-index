<script setup lang="ts">
interface SectorProps {
  icon?: string
}

const { icon = "tabler:info-square-rounded" } = defineProps<SectorProps>()
</script>

<template>
  <div class="sector-item">
    <h2 class="sector-item__header" jp>
      <Icon :name="icon" />
      <slot name="heading"></slot>
    </h2>
    <div class="sector-item__list">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$sector-gap: 0.4em;
$icon-gap: 0.4em;

.sector-item {
  @include ut.flex(column, nowrap, $sector-gap);

  &__list {
    margin-left: 2.2em;
  }

  &__header {
    @include ut.with-icon($icon-gap);
    font-weight: 900;
  }
}
</style>
