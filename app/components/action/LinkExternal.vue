<script setup lang="ts">
interface LinkExternalProps {
  src: string
  text?: string
}

const { text = "[external link]" } = defineProps<LinkExternalProps>()
const { appOptions } = useOptions()
const textDecor = computed(() =>
  appOptions.value.wordLinkDecor ? "underline" : "none"
)
</script>

<template>
  <NuxtLink
    class="action-link-external"
    :to="src"
    target="_blank"
    rel="external nofollow noopener">
    <span>{{ text }}</span>
    <Icon name="tabler:external-link" />
  </NuxtLink>
</template>

<style lang="scss">
@use "@/assets/style/modules/utilities" as ut;

// PROPERTIES
$link-gap: 0.1em;

.action-link-external {
  @include ut.with-icon($reversed: true, $space: $link-gap, $bottom: -0.16em);
  text-decoration: v-bind(textDecor);
}
</style>
