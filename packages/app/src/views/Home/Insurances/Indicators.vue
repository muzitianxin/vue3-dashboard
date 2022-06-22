<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  count: {
    type: Number,
    default: 3,
  },
  modelValue: {
    type: Number,
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="indicators row no-wrap">
    <div
      class="indicator transition-1"
      :class="{ active: modelValue === i - 1 }"
      v-for="i in count"
      :key="i"
      @click="$emit('update:modelValue', i - 1)"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.indicators {
  .indicator {
    width: 10px;
    height: 6px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:not(:nth-last-child(1)) {
      margin-right: 5px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0.7);
      width: 20px;
    }
  }
}
</style>
