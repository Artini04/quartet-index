<template>
  <slot />
</template>

<style scoped lang="scss">
@use "@/assets/style/modules/root" as rt;
@use "@/assets/style/modules/utilities" as ut;

.action {
  @include ut.flex(row, nowrap, 0.4em);
}
</style>
