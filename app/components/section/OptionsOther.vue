<script lang="ts" setup>
function clearLocalStorage() {
  localStorage.clear()
  alert("Browser local storage has been cleared for this site.")
}
</script>

<template>
  <div class="options-other">
    <SectionItem
      class="options-other__section-item"
      icon="tabler:cube"
      :background="true">
      <template #heading>Other</template>
      <ActionButton
        id="clear-local-storage"
        text="Clear localStorage"
        icon="tabler:trash"
        @click="clearLocalStorage()" />
    </SectionItem>
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/modules/layouts";

.options-other {
  @extend %grid;
}

.options-other__section-item {
  @extend %grid-content;

  & #clear-local-storage {
    --base-border-radius: var(--shared-border-radius);

    background: hsl(347, 55%, 15%);
    padding: 0.6em 0.6em 0.4em;
    border-radius: var(--base-border-radius);
  }
}
</style>
