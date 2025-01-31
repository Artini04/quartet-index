<script lang="ts" setup>
interface Props {
  icon?: string
  background?: boolean
}

const { icon = "tabler:notebook", background = false } = defineProps<Props>()
</script>

<template>
  <section class="section-item" :class="{ shaded: background }">
    <h2 class="section-item__header">
      <Icon :name="icon" />
      <span><slot name="heading" /></span>
    </h2>

    <div class="section-item__content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
@use "~/assets/styles/modules/layouts";
@use "~/assets/styles/modules/utilities" as util;

.section-item {
  --flex-dir: column;
  --flex-gap: 0.6em;

  @extend %flex;

  &.shaded {
    --shaded-padding: 0.6em;
    --shaded-border-radius: var(--shared-border-radius);

    --shaded-background: hsl(0, 0%, 15%);
    --shaded-border: hsl(0, 0%, 23%);

    padding: var(--shaded-padding);
    background: var(--shaded-background);
    border-radius: var(--shaded-border-radius);
    border: 1px solid var(--shaded-border);
  }
}

.section-item__header {
  @include util.with-icon();
}

.section-item__content {
  --flex-dir: column;
  --flex-gap: 0.4em;

  @extend %flex;

  margin-left: 2em;
}
</style>
