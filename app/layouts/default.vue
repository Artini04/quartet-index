<script setup lang="ts">
const { appDictionary } = useLookup()
const { appOptions } = useOptions()
const sidebarToggleOpen = ref(true)

function clearLocalStorage() {
  localStorage.clear()
}
</script>

<template>
  <div>
    <aside class="sidebar" :class="{ open: sidebarToggleOpen }">
      <div class="sidebar__top">
        <AsideClose @click.self="sidebarToggleOpen = false" />
        <AsideNavigation @click="sidebarToggleOpen = false" />
      </div>

      <SectorDetails icon="tabler:settings" text="アプリの設定">
        <div>
          <h3>Card Preferences</h3>
          <ActionCheckbox
            v-model="appOptions.wordShowDicts"
            id="check-show-links"
            text="Dictionary Links"
            subtext="Show dictionary links at the bottom of the word card."
          />
          <ActionCheckbox
            v-model="appOptions.otherLinkDecor"
            id="check-show-decor"
            text="External Link Underline"
            subtext="Show the underline decoration from external links."
          />
          <h3>Text Preferences</h3>
          <ActionCheckbox
            v-model="appOptions.wordBiggerJpText"
            id="check-bigger-jp"
            text="Enlarge Japanese Texts"
          />
          <ActionCheckbox
            v-model="appOptions.wordBiggerEnText"
            id="check-bigger-en"
            text="Enlarge English Texts"
          />
        </div>

        <div>
          <h1>Lookup Preferences</h1>
          <ActionSelect
            v-model="appDictionary.limit"
            id="select-limit"
            text="Limit"
            subtext="Set the lookup limit. This will automatically search the dictionary again."
          >
            <option :value="10">Default (10)</option>
            <option :value="20">Many (20)</option>
            <option :value="30">Excessive (30)</option>
          </ActionSelect>
        </div>

        <div>
          <h3>Storage</h3>
          <p>Clear <code class="subtext">localStorage</code></p>
          <ActionButton
            id="click-clear-storage"
            text="Clear localStorage"
            :opt="{ isAlert: true }"
            @click="clearLocalStorage()"
          />
        </div>
      </SectorDetails>
    </aside>

    <span @click="sidebarToggleOpen = true">open sidebar</span>

    <slot />
  </div>
</template>

<style lang="scss">
.sidebar {
  padding: 1em;
  background: black;

  position: fixed;
  top: 0;
  width: 100dvw;
  height: auto;
  min-height: 100dvh;
  z-index: 99;
  translate: -100dvw;

  @include util.animation("translate");
  @include util.space(margin-top, 1em);

  &.open {
    translate: 0dvw;
  }

  &__top {
    @include util.flex(row, wrap, 1em);
    @include util.flex-align(center);
  }

  @media screen and (width < 425px) {
    background: red;
  }
}
</style>
