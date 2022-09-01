<script lang="ts" setup>
import { Ref, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { appMenuItems } from "../libs/menu";
import { useMenu } from "../../../uses/use-menu";
import { MenuItem } from "../../../types/menu/menu-item.interface";

const $route = useRoute();
const { foldMenu } = useMenu();
const menu: Ref<MenuItem[]> = ref(appMenuItems);

// 当前选中的菜单名称
const activeMenuName = computed(() => {
  const routeName = $route.name;
  if (!routeName) return menu.value[0];
  const level1RouteName = routeName.toString().split("/").shift();
  return level1RouteName || menu.value[0];
});

// 当前选中的菜单下标
const activeMenuIndex = computed(() => {
  const index = menu.value.findIndex(
    (item) => item.id === activeMenuName.value
  );
  return index === -1 ? 0 : index;
});
</script>

<template>
  <div
    class="menu relative-position column items-center"
    :class="{ fold: foldMenu, 'q-px-md': !foldMenu }"
  >
    <q-item
      clickable
      v-for="m in menu"
      :key="m.id"
      class="app-menu-item row no-wrap items-center transition-1"
      :to="m.to"
    >
      <div class="app-menu-item-icon row no-wrap items-center justify-center">
        <q-icon :name="m.icon" />
      </div>
      <span class="app-menu-item-label transition-1 ellipsis">
        {{ m.label }}
      </span>
      <q-tooltip v-if="foldMenu" anchor="center end" self="center start">
        {{ m.label }}
      </q-tooltip>
    </q-item>

    <!-- 指示器 -->
    <div
      id="menu-indicator"
      class="transition-1"
      :style="{ top: `${activeMenuIndex * (50 + 5)}px` }"
    ></div>
  </div>
</template>

<style lang="scss">
.menu {
  --menu-item-height: 50px;
  --menu-item-gap: 5px;
  --indicator-height: 28px;
}
#menu-indicator {
  width: 5px;
  height: var(--indicator-height);
  position: absolute;
  left: 0;
  background-color: var(--q-primary);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: calc(((var(--menu-item-height) - var(--indicator-height))) / 2);
  top: 0;
}
.app-menu-item {
  width: 180px;
  height: var(--menu-item-height);
  /* 除了最后一个元素，其余都设置底部外边距 */
  &:not(:nth-last-child(1)) {
    margin-bottom: var(--menu-item-gap);
  }

  &-icon,
  &-label {
    font-weight: 500;
    color: var(--app-menu-item-normal-color);
  }
  &-icon > i {
    color: inherit;
  }

  &-icon {
    width: 30px;
    height: 30px;
  }

  &-label {
    display: block;
    width: 115px;
    overflow: hidden;
  }

  /* 菜单项激活状态样式 */
  &.q-router-link--active {
    background-color: var(--app-menu-item-active-bg) !important;
    box-shadow: var(--app-menu-item-active-shadow);

    .app-menu-item-icon {
      color: var(--q-primary);
    }

    .app-menu-item-label {
      color: var(--app-menu-item-active-color);
    }
  }
}

.menu.fold .app-menu-item {
  width: 50px;

  &-label {
    width: 0;
  }
}
</style>
