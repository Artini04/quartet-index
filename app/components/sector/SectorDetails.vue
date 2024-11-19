<script setup lang="ts">
interface SectorDetailsProps {
  icon: string
  text: string
  subtext: string
}

const { icon = "tabler:info-square" } =
  defineProps<Partial<SectorDetailsProps>>()

const isExpanded = ref(false)
</script>

<template>
  <details class="sector-details">
    <summary @click="isExpanded = !isExpanded">
      <span>
        <Icon :name="icon" />
        <span class="text">{{ text }}</span>
      </span>
      <Icon name="tabler:triangle-filled" />
    </summary>

    <div class="sector-details__slot">
      <slot />
    </div>
  </details>
</template>

<style lang="scss">
$padding__slot: 1em;
$padding__sector-details: 0.6em;
$spacing__slot: 1em;

$color__background: light-dark(black, #{root.$black-dark-00});
$color__border: light-dark(black, #{root.$black-dark-00-m});

.sector-details {
  overflow: hidden;
  @include util.with-border($color__border, 0);

  & > summary,
  &__slot {
    padding: $padding__sector-details;
  }

  & > summary {
    list-style: none;
    background-color: $color__background;
    @include util.flex(row, nowrap, 0.4em);
    @include util.flex-align(center);

    & :first-child {
      flex: 999 1;
      @include util.with-icon();
    }

    & > :last-child {
      rotate: 90deg * 3;
      @include util.animation("rotate");
    }
  }

  &[open] > summary {
    border-bottom: 1px solid $color__border;

    & > :last-child {
      rotate: 90deg * 2;
    }
  }

  &__slot {
    padding: $padding__slot;
    @include util.space(margin-top, $spacing__slot);
  }
}
</style>
