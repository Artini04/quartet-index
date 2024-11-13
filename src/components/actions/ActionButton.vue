<script setup lang="ts">
import "iconify-icon"
import type { Component } from "vue"

interface ActionButtonProps {
  is: Component
  variant?: "full" | "outline"

  id: string
  label: string
  icon?: string
  src?: string
}

const { variant = "full" } = defineProps<ActionButtonProps>()
</script>

<template>
  <component class="action-button" :is :src :variant>
    <iconify-icon :icon v-if="icon" />
    <span>{{ label }}</span>
  </component>
</template>

<style lang="scss">
@use "@/assets/style/modules/root" as rt;
@use "@/assets/style/modules/utility" as ut;

// == PROPERTIES ==
$com-spacing: 0.6em 0.4em;
$com-border-radius: 7px;
$com-animation-duration: 200ms;

// == COLOR ==
$full-color: light-dark(rt.$blue-muted-black, rt.$white);
$full-color-focus: light-dark(rt.$white, rt.$black-midnight);

$outline-color: #fff;
$outline-color-focus: #fff;

.action-button {
  @include ut.with-border();

  padding: $com-spacing;
  border-radius: $com-border-radius;
  vertical-align: middle;

  cursor: pointer;
  user-select: none;
  line-height: 1.2em;

  // Animation
  transition: scale ease $com-animation-duration;
  &:is(:active) {
    scale: 0.95;
  }

  // Flow
  & > * + * {
    margin-left: 0.4em;
  }

  // Variants
  &[variant="full"] {
    background: $full-color;
    color: $full-color-focus;
    border-color: $full-color;
  }

  &[variant="outline"] {
    background: transparent;
    color: $outline-color-focus;
    border-color: $outline-color;
  }
}
</style>
