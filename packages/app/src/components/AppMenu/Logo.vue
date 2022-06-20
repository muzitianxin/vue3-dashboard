<script lang="ts" setup>
import { useMenu } from "../../uses/use-menu";
import logo from "../../assets/vue-dashboard-d.svg";
import text from "../../assets/vue-dashboard-ashboard.svg";

const { foldMenu } = useMenu();
</script>

<template>
  <div class="app-logo full-width q-px-md" :class="{ fold: foldMenu }">
    <div
      class="row no-wrap justify-center items-end transition-1"
      :class="{
        'q-py-md': !foldMenu,
      }"
    >
      <div class="d">
        <img :src="logo" />
      </div>
      <div class="ashboard transition-1">
        <img
          style="transition: all .23s ease, visibility .2s ease .2s"
          :src="text + `?timestamp=${Date.now()}`"
        />
      </div>
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
