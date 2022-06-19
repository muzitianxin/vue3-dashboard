import { inject } from 'vue'; import { useMenu } from '../../uses/use-menu';
<script lang="ts" setup>
import { useMenu } from "../../uses/use-menu";

const { foldMenu, toggleMenu } = useMenu();
</script>

<template>
  <q-item
    dense
    clickable
    class="app-menu-toggle row no-wrap items-center justify-center"
    @click="toggleMenu"
  >
    <q-icon
      class="transition-1"
      name="fas fa-angle-right"
      :style="{
        transform: foldMenu ? 'rotate(0deg)' : 'rotate(180deg)',
      }"
    />
  </q-item>
</template>

<style lang="scss" scoped>
.app-menu-toggle {
  padding: 6px 7px !important;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  transform: translateX(-50%);
}
</style>
