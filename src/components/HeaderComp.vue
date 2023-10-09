<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

import InputTabWrapper from './input/InputTabWrapper.vue'
</script>

<template>
  <header class="header__root | main">
    <div class="header__wrapper | block-y clamped">
      <div class="block header__title">
        <h1>「トカ」Pocket Quartet</h1>
        <h2>日本語カルテット単語索引</h2>
      </div>

      <nav class="header__nav">
        <div class="header__nav-left">
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

        <div class="header__nav-right">
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
              <RouterLink to="/doc">
                <Icon icon="tabler:paperclip" />
                <span>Docs</span>
              </RouterLink>
            </template>
          </InputTabWrapper>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/mixins';

.header {
  &__root {
    padding: 2rem 1rem 0;
  }

  &__title {
    text-align: center;

    h1 {
      font-size: 1.4rem;
      line-height: 1rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }

  &__nav {
    &-left,
    &-right {
      @include inline_flex(row, wrap, 0 0.3rem);
      width: 50%;
    }

    &-left {
      @include item_alignment(center, flex-start);
    }

    &-right {
      @include item_alignment(center, flex-end);
    }
  }

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
  }
}
</style>
