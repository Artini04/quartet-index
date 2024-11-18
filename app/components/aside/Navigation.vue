<template>
  <nav>
    <NuxtLink to="/">
      <Icon name="tabler:list-search" />
      <span>Lookup</span>
    </NuxtLink>
    <NuxtLink to="/info">
      <Icon name="tabler:paperclip" />
      <span>About</span>
    </NuxtLink>
  </nav>
</template>

<style lang="scss">
$padding: 0.6em 1em;

$background: light-dark(black, root.$black-dark-00);
$background-focus: light-dark(black, root.$black-dark-00-h);
$border: light-dark(black, root.$black-dark-00-m);

nav {
  flex: 999 1;
  justify-content: flex-end;
  @include util.flex(row, wrap, 0.4em);

  & > * {
    flex: 1 1;
    text-wrap: nowrap;
    padding: $padding;
    @include util.with-icon();
  }

  & > a {
    @include util.animation("background-color");
    @include util.with-border($border, $padding);
    @include util.on-hover(background-color, $background, $background-focus);
  }
}
</style>
