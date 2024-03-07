<script setup lang="ts">
interface Props {
  id: string
  variant?: 'normal' | 'reversed'
  value: string
}

withDefaults(defineProps<Props>(), {
  variant: 'normal',
})

const model = defineModel()
</script>

<template>
  <label class="flow-rv-fx" :for="id" :variant>
    <span class="custom-checkbox-text">{{ value }}</span>
    <input type="checkbox" :id v-model="model" />
    <span class="custom-checkbox"></span>
  </label>
</template>

<style lang="scss" scoped>
@use '@/assets/modules/mixins' as mx;

label {
  display: block;
  position: relative;
  user-select: none;

  &:is(:active) .custom-checkbox {
    scale: 0.8;
  }
}

input[type='checkbox'] {
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
  pointer-events: none;

  & ~ .custom-checkbox {
    background: var(--chkbox-bg-color);

    &::after {
      display: none;
    }
  }

  &:checked ~ .custom-checkbox {
    background: var(--chkbox-bg-color-active);

    &::after {
      display: block;
    }
  }
}

.custom-checkbox {
  @include mx.transition($properties: 'scale');
  $size: 1.2em;

  overflow: hidden;
  border: 1px solid var(--chkbox-bd-color);
  border-radius: 5px;
  position: absolute;
  top: 0.175em;
  left: 0;

  width: $size;
  height: $size;

  // Custom checkbox check icon
  &::after {
    content: '';
    position: absolute;

    left: 0.33em;
    top: 2px;

    width: 5px;
    height: 10px;

    border-style: solid;
    border-color: var(--chkbox-bd-color);
    border-width: 0 3px 3px 0;
    rotate: 45deg;
  }

  &-text {
    margin-left: 2rem;
  }
}
</style>
