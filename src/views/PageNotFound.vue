<template>
  <main class="page-not-found">
    <h1>Page Not Found!</h1>
    <p>Nothing to see here...</p>
  </main>
</template>

<style lang="scss">
@use '@/assets/modules/composition' as cm;

.page-not-found {
  @include cm.spaced($gap: 0.4rem);
  align-items: center;
  justify-content: center;
  height: 200px;
}
</style>
