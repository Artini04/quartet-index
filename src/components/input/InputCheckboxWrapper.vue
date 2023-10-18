<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface Props {
  id: string
  properties: {
    text: string
    icon?: string
  }
}

defineProps<Props>()
</script>

<template>
  <label :for="id" class="input-checkbox">
    <div class="input-checkbox__text">
      <Icon :icon="properties.icon" v-if="properties.icon" />
      <span>{{ properties.text }}</span>
    </div>

    <!-- Checkbox -->
    <slot> </slot>
    <!-- End of Checkbox -->

    <span class="input-checkbox__custom | border-square"></span>
  </label>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

$checkbox-background-color: var(--component-input-background-color, #eee);
$checkbox-background-color-checked: var(--component-input-background-color-checked, #2b5868);
$input-spacing: 0.5rem;

.input-checkbox {
  display: block;
  position: relative;
  user-select: none;

  // Remove touch feedback highlight
  -webkit-tap-highlight-color: transparent;

  input {
    position: absolute;
    height: 0;
    width: 0;
  }

  input ~ &__custom {
    @include transition(125ms);
    background: $checkbox-background-color;

    // Invisible if input isn't checked
    &::after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  input:checked ~ &__custom {
    background: $checkbox-background-color-checked;

    // Visible if input is checked
    &::after {
      display: block;
    }
  }

  &__custom {
    $size: 1.3rem;
    overflow: hidden;

    position: absolute;
    top: 0.2rem;
    left: 0;

    width: $size;
    height: $size;

    // Custom check
    &::after {
      left: 0.4rem;
      top: 3px;

      width: 5px;
      height: 10px;

      border: solid white;
      border-width: 0 3px 3px 0;
      rotate: 45deg;
    }
  }

  &__text {
    margin-left: 2rem;

    & > * + * {
      margin-left: 0.5rem;
    }
  }
}
</style>
