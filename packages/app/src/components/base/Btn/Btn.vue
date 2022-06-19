<template>
  <component :is="renderAs" :href="href" :to="to" style="display: inline">
    <q-btn
      :flat="type === 'flat'"
      :style="{
        width: widthEqualHeight ? `${size}px` : 'auto',
        height: `${size}px`,
        borderRadius,
        border,
      }"
      :class="{ ...btnClasses, shadowed: shadowed !== false }"
      class="bcam-btn transition-1"
      :disable="disable || loading"
    >
      <div class="row no-wrap items-center" v-if="loading">
        <q-spinner size="16px" />
        <span v-if="!widthEqualHeight" class="q-ml-sm">正在加载...</span>
      </div>
      <div class="row no-wrap items-center" v-else>
        <slot>
          <div
            v-if="icon"
            class="relative-position row items-center no-wrap"
            :class="{
              'q-mr-sm': !widthEqualHeight,
            }"
          >
            <q-icon :name="icon" :size="`${iconSize}px`"> </q-icon>
            <transition
              appear
              :duration="100"
              enter-active-class="animated animate__zoomIn"
              leave-active-class="animated animate__zoomOut"
            >
              <div
                v-if="dot"
                class="bcam-btn-dot"
                :style="`--icon-size: ${iconSize}px`"
              >
                {{ dot > dotMax ? `${dotMax}+` : dot }}
              </div>
            </transition>
          </div>
          <span v-else-if="widthEqualHeight && label">
            {{ label.substring(0, 1) }}
          </span>
          <span v-if="!widthEqualHeight" class="ellipsis">{{ label }}</span>
        </slot>
      </div>
      <div
        v-if="type === 'translucent'"
        class="translucent-mask rounded-borders"
        :class="{ [`bg-${color}`]: true }"
        :style="{
          borderRadius,
        }"
      ></div>
      <q-tooltip v-if="tooltipText">
        {{ tooltipText }}
      </q-tooltip>
    </q-btn>
  </component>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType, computed } from "vue";
import { RouteLocationRaw } from "vue-router";

const props = defineProps({
  icon: {
    type: String,
    require: false,
  },
  label: {
    type: String,
    require: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String as PropType<"normal" | "square" | "circle" | "round">,
    validator: (val: string) =>
      ["normal", "square", "circle", "round"].includes(val),
    default: "normal",
  },
  size: {
    type: Number,
    default: 36,
  },
  color: {
    type: String,
    default: "primary",
  },
  textColor: {
    type: String,
    default: "white",
  },
  type: {
    type: String as PropType<"fill" | "translucent" | "flat">,
    default: "fill",
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: "",
  },
  dot: {
    type: Number,
    default: 0,
  },
  dotMax: {
    type: Number,
    default: 99,
  },
  shadowed: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Object as PropType<RouteLocationRaw>,
  },
  href: {
    type: String,
  },
  class: {
    type: String,
  },
});

// 宽度是否需要等于高度
const widthEqualHeight = computed(() => {
  return ["square", "circle"].includes(props.shape) || !props.label;
});
// 使用大圆角
const useRoundRadius = computed(() => {
  return ["circle", "round"].includes(props.shape);
});

// 按钮的 class
const btnClasses = computed(() => {
  const classes: Record<string, boolean> = {};
  (props.class || "")
    .split(/\s+/)
    .forEach((className) => (classes[className] = true));
  if (props.type === "fill") {
    classes[`bg-${props.color}`] = true;
    classes[`text-${props.textColor}`] = true;
  } else if (props.type === "flat") {
    classes[`text-${props.color}`] = true;
  } else if (props.type === "translucent") {
    classes[`bg-translucent`] = true;
    classes[`text-${props.color}`] = true;
  }
  return classes;
});

// 圆角
const borderRadius = computed(() => {
  return useRoundRadius.value ? `${props.size / 2}px` : undefined;
});
// 是否显示边框
const outline = computed(() => {
  return props.bordered !== false && props.type !== "fill";
});
// 边框样式
const border = computed(() => {
  return outline.value ? `1px solid currentColor` : undefined;
});
// tooltip 的文本
const tooltipText = computed(() => {
  return widthEqualHeight.value ? props.tooltip || props.label : props.tooltip;
});
// 图标的大小
const iconSize = computed(() => {
  return props.size / 2 - 4;
});
const renderAs = computed(() => {
  return props.to ? "router-link" : props.href ? "a" : "div";
});
</script>

<style lang="scss">
@import "@/styles/quasar.variables.scss";

a,
a:link,
a:visited,
a:active,
a:focus,
a:hover {
  text-decoration: none !important;
}

button.bcam-btn {
  line-height: unset !important;
  min-height: unset;
  position: relative;

  .translucent-mask {
    /* border-radius: inherit; */
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  &.bg-translucent {
    .translucent-mask {
      transition: all 0.23s ease;
      display: block;
      opacity: 0.12;
      z-index: -1;
    }
    &:hover .translucent-mask {
      opacity: 0.2;
    }
  }
}
button.bcam-btn::before,
button.bcam-btn.q-btn--actionable.q-btn--active::before {
  box-shadow: none;
}

button.bcam-btn {
  .bcam-btn-dot {
    position: absolute;
    height: 14px;
    line-height: 14px;
    font-size: 0.7rem;
    padding: 0 5px;
    border-radius: 7px;
    background-color: var(--q-negative);
    left: calc(100% - 8px);
    bottom: calc(50% + var(--icon-size) / 2 - 7px);
    color: white;
  }
}

button.bcam-btn.shadowed {
  box-shadow: $shadow-1;

  &:hover {
    box-shadow: $shadow-3;
  }
}
</style>
