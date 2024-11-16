<template>
  <nav>
    <NuxtLink to="/" class="navigation">Home</NuxtLink>
    <NuxtLink to="/info" class="navigation">Info / Preferences</NuxtLink>
  </nav>
</template>

<style lang="scss">
@use "@/assets/style/modules/root" as rt;
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$nav-pad: 0.4em 0.6em;

// COLOR
$nav-background-color: light-dark(black, rt.$black-01);
$nav-background-color-focus: light-dark(black, rt.$black-02);

nav {
  display: flex;
  flex-flow: row wrap;
  gap: 0.5em;
}

.navigation {
  @include ut.with-border();
  @include ut.animation("background");

  padding: $nav-pad;
  display: inline-block;
  text-decoration: none;
  background: $nav-background-color;
  color: inherit;

  &:is(:hover, :focus) {
    background: $nav-background-color-focus;
  }

  &.router-link-active {
    background: $nav-background-color-focus;
  }
}
</style>
