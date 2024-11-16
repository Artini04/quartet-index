<script setup lang="ts">
interface SectorProps {
  icon?: string
  background?: boolean
}

const { icon = "tabler:info-square-rounded", background = false } =
  defineProps<SectorProps>()
</script>

<template>
  <div class="sector-item" :background>
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
@use "@/assets/style/modules/root" as rt;
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$sector-icon-spacing: 0.4em;
$sector-item-spacing: 0.4em;
$sector-spacing-bg: 0.6em 0.8em;

.sector-item {
  &__list {
    @include ut.space(margin-top, $sector-item-spacing);
    margin-left: 2.2em;

    &:first {
      margin-top: 0;
    }
  }

  &__header {
    @include ut.with-icon($sector-icon-spacing);
    font-weight: 900;
  }

  &[background="true"] {
    @include ut.with-border();
    border-color: rt.$comp-border-color-muted;
    background: rt.$comp-background-color;
    padding: $sector-spacing-bg;
  }
}
</style>
