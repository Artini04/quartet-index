<script setup lang="ts">
interface SectorItemProps {
  icon?: string
  opt?: Partial<OtherProperties>
}

interface OtherProperties {
  hasBackground: boolean
}

const { icon = "tabler:info-square-rounded" } = defineProps<SectorItemProps>()
</script>

<template>
  <div class="sector-item" :class="{ hasBackground: opt?.hasBackground }">
    <h2 class="sector-item__header" jp>
      <Icon :name="icon" />
      <span>
        <slot name="heading" />
      </span>
    </h2>
    <div class="sector-item__list">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
// PROPERTIES
$spacing: 1em;
$list-spacing: 0.4em;
$background-padding: 0.6em;

// COLORS
$background: light-dark(red, root.$black-dark-00);
$background-border: light-dark(red, root.$black-dark-00-m);

.sector-item {
  @include util.space(margin-top, $spacing);

  &__header {
    @include util.with-icon();
  }

  &__list {
    margin-left: 2em;
    @include util.flex(column, nowrap, $list-spacing);
  }

  &.hasBackground {
    background: $background;
    padding: $background-padding;

    & {
      @include util.with-border($background-border);
    }
  }
}
</style>
