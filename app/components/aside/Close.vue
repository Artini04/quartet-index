<template>
  <Icon name="tabler:x" />
</template>

<style scoped lang="scss">
$padding: 0.6em 1em;
$border: light-dark(black, root.$black-dark-00-h);

.iconify {
  cursor: pointer;
  padding: $padding;

  @include util.animation("scale", 100ms);
  @include util.on-hover(scale, 1, 1.5);
}
</style>
