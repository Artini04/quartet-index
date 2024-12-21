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
    <input :id type="checkbox" :name="id" v-model="checkModel" />
    <div class="text">
      <span>{{ text }}</span>
      <span class="subtext" v-if="subtext">{{ subtext }}</span>
    </div>
  </label>
</template>

<style lang="scss">
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
