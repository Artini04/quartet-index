<script lang="ts" setup>
interface Props {
  id: string
  text: string
  subtext?: string
}

defineProps<Props>()
const checkModel = defineModel({ type: Boolean })
</script>

<template>
  <label class="action-checkbox" :for="id">
    <input :id v-model="checkModel" type="checkbox" :name="id" />
    <div class="text">
      <span>{{ text }}</span>
      <span v-if="subtext" class="subtext">{{ subtext }}</span>
    </div>
  </label>
</template>

<style lang="scss">
@use "~/assets/styles/modules/utilities" as util;
.action-checkbox {
  cursor: pointer;
  @include util.use-flex(row, nowrap, 1em);

  & .text {
    display: inline-block;
    & > span {
      display: block;
    }

    & .subtext {
      font-size: 0.85em;
      color: hsl(0, 0%, 60%);
    }
  }
}
</style>
