<script lang="ts" setup>
function clearLocalStorage() {
  localStorage.clear()
  alert("Browser local storage has been cleared for this site.")
}
</script>

<template>
  <footer class="toolbar-footer">
    <div class="toolbar-footer__content">
      <div class="footer-links">
        <ActionLinkExternal
          text="Github"
          icon="tabler:brand-github"
          src="https://github.com/Artini04/quartet-index"
          :hide-external="true" />
        <ActionLinkExternal
          text="Issues / Suggestions"
          icon="tabler:circle-dot"
          src="https://github.com/Artini04/quartet-index/issues"
          :hide-external="true" />
      </div>

      <div class="footer-mark">
        <div class="footer-mark-copy">
          <span>{{ new Date().getFullYear() }}</span>
          <span>//</span>
          <span>
            built by
            <ActionLinkExternal
              text="@artini04"
              src="https://github.com/Artini04" />
          </span>
        </div>
        <ActionButton
          id="reset-storage"
          text="Global reset localStorage"
          @click="clearLocalStorage()" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use "./toolbar" as toolbar;

.toolbar-footer {
  @extend %grid;
  margin-block: 1em;
}

.toolbar-footer__content {
  @extend %grid-content;

  --flex-wrap: nowrap;

  @extend %flex;

  color: hsl(0, 0%, 60%);

  & .footer-links,
  & .footer-mark {
    --flex-dir: column;
    --flex-gap: 0.2em 0;
    @extend %flex;

    flex: 1 1 50%;
  }

  & .footer-mark {
    align-items: flex-end;

    &-copy {
      --flex-gap: 0 0.6em;
      @extend %flex;
    }

    @include toolbar.use-break(600px) {
      align-items: unset;
    }
  }

  @include toolbar.use-break(600px) {
    --flex-dir: column;
    --flex-gap: 1em;
  }
}
</style>
