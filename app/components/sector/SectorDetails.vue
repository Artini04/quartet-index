<script setup lang="ts">
interface SectorDetailsProps {
  icon: string
  text: string
  subtext: string
}

const { icon = "tabler:info-square" } =
  defineProps<Partial<SectorDetailsProps>>()
</script>

<template>
  <details class="sector-details">
    <summary>
      <Icon :name="icon" />
      <span>{{ text }}</span>
    </summary>

    <div>
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

  & summary,
  & > div {
    padding: var(--padding);
  }

  & summary {
    list-style: none;

    @include util.with-icon();
  }

  &[open] {
    & summary {
      border-bottom: 1px solid var(--border-color);
    }
  }
}
// .sector-details {
//   --padding: 1em;

//   border: 1px solid var(--border-color);
//   border-radius: 7px;
//   overflow: hidden;

//   &__auto-height {
//     display: grid;
//     grid-template-rows: 0fr;
//     overflow: hidden;
//     transition: grid-template-rows 200ms;

//     & > div {
//       min-height: 0;
//       visibility: hidden;
//       transition: visibility 200ms;
//     }

//     &.expanded {
//       grid-template-rows: 1fr;

//       & > div {
//         visibility: visible;
//       }
//     }
//   }

//   &[open] {
//     summary {
//       border-bottom: 1px solid var(--border-color);
//     }
//   }

//   & summary {
//     padding: var(--padding);
//     list-style: none;

//     @include util.with-icon();
//   }

//   & > * {
//     padding: var(--padding);
//   }

//   & > div {
//     @include util.space(margin-top, 0.4em);
//   }
// }
</style>
