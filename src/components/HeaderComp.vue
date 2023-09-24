<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

import InputTabWrapper from './input/InputTabWrapper.vue'
</script>

<template>
  <header class="header-root clamped">
    <div class="header-title">
      <h1>ポケットカルテット</h1>
      <h2>日本語カルテット単語索引</h2>
    </div>

    <div class="header-note"></div>

    <nav class="header-nav">
      <div class="header-nav-left">
        <InputTabWrapper>
          <template v-slot:button>
            <RouterLink to="/">
              <Icon icon="tabler:books" />
              <span>Look-up</span>
            </RouterLink>
          </template>
        </InputTabWrapper>

        <InputTabWrapper>
          <template v-slot:button>
            <RouterLink to="/table">
              <Icon icon="tabler:grid-pattern" />
              <span>Table [WIP]</span>
            </RouterLink>
          </template>
        </InputTabWrapper>
      </div>

      <div class="header-nav-right">
        <InputTabWrapper>
          <template v-slot:button>
            <RouterLink to="/options">
              <Icon icon="tabler:settings" />
              <span>Options</span>
            </RouterLink>
          </template>
        </InputTabWrapper>
        <InputTabWrapper>
          <template v-slot:button>
            <RouterLink to="/about">
              <Icon icon="tabler:info-circle" />
              <span>About</span>
            </RouterLink>
          </template>
        </InputTabWrapper>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import '@/assets/mixins';

.header {
  &-root {
    width: var(--component-limit-width);
    max-width: var(--component-limit-width-clamp);
    margin: 1rem auto 0;

    @include margin_top(1rem);
  }

  &-title {
    text-align: center;

    h1 {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  &-note {
    text-align: justify;
  }

  &-nav {
    &-left,
    &-right {
      @include inline_flex(row, wrap, 0.3rem);
      width: 50%;
    }

    &-left {
      @include item_alignment(center, flex-start);
    }

    &-right {
      @include item_alignment(center, flex-end);
    }
  }
}
</style>
