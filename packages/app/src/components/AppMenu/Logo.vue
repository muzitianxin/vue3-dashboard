<script lang="ts" setup>
import logo from "../../assets/vue-dashboard-d.svg";
import text from "../../assets/vue-dashboard-ashboard.svg";
import { useMenu } from "../../uses/use-menu";

const { foldMenu } = useMenu();
</script>

<template>
  <div
    class="
      app-logo
      row
      no-wrap
      justify-center
      items-end
      full-width
      q-px-md q-pt-lg
    "
    :class="{ fold: foldMenu }"
  >
    <div class="d">
      <img :src="logo" />
    </div>
    <div class="ashboard transition-1">
      <img class="transition-1" :src="text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-logo {
  img {
    width: 100%;
  }
  .d {
    /* height: 40px; */
    width: 32px;
  }
  .ashboard {
    width: 110px;
    overflow: hidden;
    height: 30px;
    padding-left: 2px;

    img {
      height: inherit;
    }
  }

  &.fold {
    .ashboard {
      width: 0;
      visibility: hidden;
      img {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
