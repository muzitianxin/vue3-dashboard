<script lang="ts" setup>
import { defineProps } from "vue";

// components
import Logo from "./Logo.vue";
import FoldToggle from "./FoldToggle.vue";
import { useMenu } from "../../uses/use-menu";

// props
defineProps({ menus: { type: Array, default: () => [] } });

// [use] 是否折叠菜单
const { foldMenu } = useMenu();
</script>

<template>
  <div
    id="app-menu"
    class="full-height column no-wrap transition-1"
    :class="{ fold: foldMenu }"
  >
    <Logo />
    <FoldToggle class="fold-toggle" />
  </div>
</template>

<style lang="scss">
#app-menu {
  width: 220px;
  background: white;
  box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.01);
  position: relative;

  &.fold {
    width: 80px;
  }

  .fold-toggle {
    position: absolute;
    left: 100%;
    top: 30px;
  }
}
</style>
