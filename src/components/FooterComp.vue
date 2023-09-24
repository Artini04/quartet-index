<script setup lang="ts">
import { Icon } from '@iconify/vue'
import InputTabWrapper from './input/InputTabWrapper.vue'
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

    <div class="footer-icon-list">
      <InputTabWrapper>
        <template v-slot:button>
          <a href="https://github.com/Artini04/quartet-index" target="_blank">
            <Icon icon="tabler:brand-github-filled" />
            <span>Project Page</span>
          </a>
        </template>
      </InputTabWrapper>

      <InputTabWrapper>
        <template v-slot:button>
          <a href="https://github.com/Artini04/quartet-index/issues" target="_blank">
            <Icon icon="tabler:circle-dot" />
            <span>Report Issue</span>
          </a>
        </template>
      </InputTabWrapper>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/mixins';

.footer {
  &-root {
    @include display(block);
    @include margin-top(var(--component-spacing) / 2);

    width: var(--component-limit-width);
    max-width: var(--component-limit-width-clamp);
    margin-inline: auto;
  }

  &-icon-list {
    @include flex(row, nowrap, 0.5rem);
    @include item_alignment(center, center);
  }
}
</style>
