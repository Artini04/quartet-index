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
      <slot name="heading" />
    </h2>
    <div class="sector-item__list">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$icon-spacing: 0.4em;
$sector-spacing: 0.4em;
$sector-item-spacing: 0.4em;

.sector-item {
  @include ut.space(margin-top, $sector-spacing);

  &__list {
    @include ut.space(margin-top, $sector-item-spacing);
    margin-left: 2.2em;
  }

  &__header {
    @include ut.with-icon($icon-spacing);
    font-weight: 900;
  }
}
</style>
