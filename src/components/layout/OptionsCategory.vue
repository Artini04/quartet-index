<template>
  <div class="options-category | border-rounded">
    <slot> </slot>
    <div class="options-category__options">
      <slot name="options"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/mixins' as _mixins;

$category-spacing: 0.5rem;
$options-spacing: 0.7rem;

.options-category {
  h3 {
    margin-bottom: $category-spacing;
    line-height: 1.6rem;
  }

  &__options {
    @include _mixins.spacing($options-spacing, y, block);
  }
}
</style>
