<script lang="ts" setup>
import { defineProps } from "vue";
import { useMenu } from "../../uses/use-menu";

// components
import Logo from "./Logo.vue";
import FoldToggle from "./FoldToggle.vue";
import Menu from "./Menu/index.vue";
import UserProfile from "./UserProfile.vue";

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
    <Logo class="q-pt-lg q-pb-md" />
    <q-scroll-area
      class="full-width column col-grow"
      style="overflow-x: hidden"
    >
      <Menu />
    </q-scroll-area>
    <UserProfile />
    <FoldToggle class="fold-toggle" />
  </div>
</template>

<style lang="scss">
#app-menu {
  width: 220px;
  background: var(--app-menu-bg);
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
