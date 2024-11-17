<template>
  <nav>
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/info" class="nav-link">Info / Preferences</NuxtLink>
    <NuxtLink to="/test" class="nav-link">Testing Page</NuxtLink>
  </nav>
</template>

<style lang="scss">
// PROPERTIES
$nav-spacing: 0.4em;
$nav-link-padding: 0.4em 0.6em;

// COLOR
$primary: light-dark(red, root.$black-dark-00);
$primary-focus: light-dark(red, root.$black-dark-00-m);
$border: light-dark(red, root.$black-dark-00-m);
$border-focus: light-dark(red, root.$black-dark-00-h);

nav {
  @include util.flex(row, nowrap, $nav-spacing);
}

.nav-link {
  padding: $nav-link-padding;
  text-decoration: none;

  @include util.animation("background, border");
  @include util.with-hover(background, $primary, $primary-focus);
  @include util.with-border($border);
  @include util.with-hover(border-color, $border, $border-focus);

  &.router-link-active {
    background: $primary-focus;
  }
}
</style>
