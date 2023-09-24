<script setup lang="ts">
defineProps<{
  japanese_main: string[]
  japanese_secondary: string[]
  particle: string | null
  suru: string | null
}>()
</script>

<template>
  <div class="card-japanese" lang="jp">
    <span class="ja-kk" v-for="item in japanese_main" :key="item">
      {{ item }}
    </span>
    <div class="ja-phs">
      <span class="ja-particle" v-if="particle"> [{{ particle }}] </span>
      <span class="ja-h" v-for="item in japanese_secondary" :key="item">
        {{ item }}
      </span>
      <span class="ja-suru" v-if="suru">({{ suru }})</span>
    </div>
  </div>
</template>

<style lang="scss">
.card-japanese {
  text-align: center;

  .ja {
    &-kk {
      font-size: 2rem;
      line-height: 2.3rem;
      color: var(--kana-kanji);
    }

    &-h {
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &-phs {
      & > * + * {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
