<script setup lang="ts">
import LinkButton from './action/LinkButton.vue'
</script>

<template>
  <footer class="footer | clamped">
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
          :props="{
            text: 'Project Page',
            icon: 'tabler:brand-github-filled',
            link: 'https://github.com/Artini04/quartet-index',
          }" />
        <LinkButton
          id="to-github-issues"
          variant="full"
          :isRouterLink="false"
          :props="{
            text: 'Issues / Suggestions',
            icon: 'tabler:circle-dot',
            link: 'https://github.com/Artini04/quartet-index/issues',
          }" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  // Container properties
  container-type: inline-size;
  container-name: footerRoot;

  // Styles
  &-wrapper {
    border-radius: var(--gbl-bor-rad);
    background: var(--footer-bg-color);
    padding: var(--gbl-pad-2);
  }

  &-p,
  &-links {
    flex: 1 1 50%;
  }
}

@container footerRoot (width > 425px) {
  .footer-wrapper {
    flex-direction: row !important;
    gap: 1rem;
  }
}
</style>
