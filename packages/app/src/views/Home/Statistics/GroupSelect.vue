<script lang="ts" setup>
import { defineProps, PropType, watch, ref } from "vue";

const props = defineProps({
  types: { type: Array as PropType<Array<string>>, default: () => [] },
  modelValue: { type: String },
  autoPlay: { type: Number, default: 0 },
});
const emits = defineEmits(["update:modelValue"]);

const player = ref();
const pause = () => {
  if (!player.value) return;
  clearInterval(player.value);
  player.value = null;
};
const play = () => {
  pause();
  if (!props.autoPlay) return;
  player.value = setInterval(() => {
    const index = props.types.indexOf(props.modelValue || "");
    const nextIndex = (index + 1) % props.types.length;
    emits("update:modelValue", props.types[nextIndex]);
  }, props.autoPlay);
};
watch(
  () => props.autoPlay,
  (play) => {
    if (play > 0) {
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="group-selector row no-wrap items-center justify-between q-px-sm q-py-xs transition-1"
  >
    <div class="text-bold">
      <span v-show="modelValue === t" v-for="t in types" :key="t">
        {{ t }}
      </span>
    </div>
    <span>
      <q-icon name="fas fa-angle-down" size="0.8rem" />
    </span>
    <q-menu :offset="[0, 5]">
      <q-card style="width: 80px" class="q-pa-xs">
        <q-item
          dense
          clickable
          v-for="(t, i) in types"
          :key="t"
          v-close-popup
          @click="$emit('update:modelValue', t)"
          class="row items-center justify-center rounded-borders transition-1"
          :class="{ 'type-checked': modelValue === t }"
        >
          {{ t }}
        </q-item>
      </q-card>
    </q-menu>
  </div>
</template>

<style lang="scss" scoped>
.group-selector {
  width: 80px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid #e6e6e650;
  cursor: pointer;
  color: var(--text-color);
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
}
.type-checked {
  color: var(--q-primary);
  font-weight: bold;
}
</style>
