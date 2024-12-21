<script lang="ts" setup>
interface Props {
  icon?: string
}

const { icon = "tabler:info-square" } = defineProps<Props>()
</script>

<template>
  <section class="section-item">
    <h2 class="header">
      <Icon :name="icon" />
      <span><slot name="heading" /></span>
    </h2>

    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.section-item {
  & .header {
    margin-bottom: 0.6em;
    @include util.with-icon();
  }

  & .content {
    margin-left: 2em;
  }
}
</style>
