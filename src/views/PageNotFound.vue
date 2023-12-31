<template>
  <main class="page-not-found | clamped text-center">
    <h1>Page Not Found!</h1>
    <p>Nothing to see here...</p>
  </main>
</template>

<style lang="scss">
@use '@/assets/mixins' as _mixins;

.page-not-found {
  @include _mixins.spacing(0.5rem, y, block);
}
</style>
