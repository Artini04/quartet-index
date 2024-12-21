<script lang="ts" setup>
interface Props {
  icon?: string
  background?: boolean
}

const { icon = "tabler:info-square", background = false } = defineProps<Props>()
</script>

<template>
  <section class="section-item" :class="{ 'use-background': background }">
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
    & > * + * {
      margin-top: 0.6em;
    }
  }
}

.section-item.use-background {
  padding: 1em;
  background: hsl(225, 5%, 15%);
  border: 1px solid hsl(230, 8%, 25%);
  border-radius: 7px;
}
</style>
