<template>
  <div class="options-category | border-rounded">
    <slot> </slot>
    <div class="options-category__options">
      <slot name="options"></slot>
    </div>
  </div>
</template>

<style lang="scss">
$category-spacing: 0.5rem;
$options-spacing: 0.5rem;

.options-category {
  h3 {
    margin-bottom: $category-spacing;

    line-height: 1.2rem;
  }

  &__options {
    & > * {
      display: block;
    }

    & > * + * {
      margin-top: $options-spacing;
    }
  }
}
</style>
