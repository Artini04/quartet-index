<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="footer-root">
    <p>
      Vue3と日本語を習うためにこの<a
        href="https://github.com/Artini04/quartet-index"
        target="_blank"
        >プロジェクト</a
      >を作りました。使った言葉が「４技能でひろがる中級日本語カルテット」という本に由来しているものです。
    </p>
    <span class="footer-icon-list">
      <a href="https://github.com/Artini04/quartet-index" target="_blank">
        <Icon icon="tabler:brand-github-filled" />
      </a>
    </span>
  </footer>
</template>

<style lang="scss">
.footer {
  &-root {
    width: var(--component-limit-width);
    max-width: var(--component-limit-width-clamp);
    margin-inline: auto;

    border-top: 1px solid var(--app-font-muted);
    padding-top: 1rem;

    & > * {
      display: block;

      & + * {
        margin-top: var(--component-spacing);
      }
    }
  }

  &-icon-list {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }
}
</style>
