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
  <details class="sector-details" @click.self="isExpanded = !isExpanded">
    <summary>
      <Icon :name="icon" />
      <span>{{ text }}</span>
    </summary>

    <div class="sector-details__auto-height" :class="{ expanded: isExpanded }">
      <slot />
    </div>
  </details>
</template>

<style lang="scss">
@property --padding {
  syntax: "<size>";
  inherits: false;
  initial-value: 1em;
}

.sector-details {
  --padding: 1em;
  --border-color: light-dark(black, #{root.$black-dark-00-m});

  border: 1px solid var(--border-color);
  border-radius: 7px;
  overflow: hidden;

  &__auto-height {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 200ms;

    &.expanded {
      grid-template-rows: 1fr;
    }
  }

  &[open] {
    summary {
      border-bottom: 1px solid var(--border-color);
    }
  }

  & summary {
    padding: var(--padding);
    list-style: none;

    @include util.with-icon();
  }

  & > * {
    padding: var(--padding);
  }

  & > div {
    @include util.space(margin-top, 0.4em);
  }
}
</style>
