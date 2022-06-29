<script lang="ts" setup>
import { PropType, computed, reactive, Ref, ref } from "vue";
import { useStorage } from "@vueuse/core";

interface SortItem {
  label: string;
  field: string;
  desc?: boolean;
}

const props = defineProps({
  items: { type: Array as PropType<Array<SortItem>>, default: () => [] },
  field: { type: String },
  order: { type: String },
});
const emits = defineEmits(["update:field", "update:order"]);

const unitWidth = computed(() => 100 / props.items.length);
const activeIndex = computed(() =>
  props.items.findIndex((item) => item.field === props.field)
);

const orderDict: Ref<Record<string, boolean>> = useStorage(
  "__homeAmountSorterOrderDict__",
  props.items.reduce((res, curr) => ({ ...res, [curr.field]: !!curr.desc }), {})
);

const handleToggle = (field: string, active: boolean) => {
  if (active) {
    orderDict.value[field] = !orderDict.value[field];
  } else {
    emits("update:field", field);
  }
  emits("update:order", orderDict.value[field] ? "DESC" : "ASC");
};
</script>

<template>
  <div class="sorter row no-wrap items-center">
    <div
      class="sorter-item row no-wrap items-center justify-center"
      v-for="item in items"
      :key="item.field"
      :class="{ 'sorter-item_active': field === item.field }"
      @click="handleToggle(item.field, field === item.field)"
    >
      <span class="q-mr-xs text-caption">{{ item.label }}</span>
      <q-icon
        size="0.7rem"
        name="fas fa-arrow-up"
        class="transition-1"
        :style="{
          color: orderDict[item.field] ? '#2CEF9E' : '#FF3938',
          transform: `rotate(${orderDict[item.field] ? 180 : 0}deg)`,
        }"
      />
    </div>

    <div
      class="sorter-indicator transition-1"
      :style="{ width: `${unitWidth}%`, left: `${activeIndex * unitWidth}%` }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.sorter {
  height: 36px;
  border-radius: 20px;
  background-color: #eceff4;
  padding: 5px;
  position: relative;

  &-item {
    user-select: none;
    width: 0;
    height: 100%;
    flex-grow: 1;
    position: relative;
    cursor: pointer;
    border-radius: inherit;
    color: var(--text-color);
    z-index: 1;

    &:not(.sorter-item_active):hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    & > span {
      opacity: 0.7;
    }

    &_active {
      & > span {
        font-weight: bold;
        opacity: 1;
      }
    }
  }

  &-indicator {
    border-radius: inherit;
    position: absolute;
    height: 100%;
    z-index: 0;
    left: 0;
    top: 0;
    padding: inherit;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: #fff;
      left: 0;
      top: 0;
      display: block;
      box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.02),
        -1px 3px 4px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
