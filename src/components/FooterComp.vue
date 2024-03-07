<script setup lang="ts">
import LinkButton from './action/LinkButton.vue'
</script>

<template>
  <footer>
    <div class="footer-wrapper | flow-wf-fx">
      <div class="footer-p | flow-wf-fx">
        <h2>「トカ」</h2>
        <p>日本語カルテットの学ぶために小さな単語索引のアプリ。</p>
      </div>

      <div class="footer-links | flow-wf-fx">
        <h2>リンク</h2>
        <LinkButton
          id="to-github"
          variant="full"
          :isRouterLink="false"
          value="Project Page"
          icon="tabler:brand-github-filled"
          src="https://github.com/Artini04/quartet-index" />
        <LinkButton
          id="to-github-issues"
          variant="full"
          :isRouterLink="false"
          value="Issues / Suggestions"
          icon="tabler:circle-dot"
          src="https://github.com/Artini04/quartet-index/issues" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  // Styles
  &-wrapper {
    --flow-space: 1rem;

    border-radius: var(--gbl-bor-rad);
    background: var(--footer-bg-color);
    padding: 1rem 0.6rem;
  }

  &-p,
  &-links {
    --flow-space: 0.4rem;
    flex: 1 1 50%;
  }
}
</style>
