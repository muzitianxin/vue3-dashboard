<script setup lang="ts">
import AppMenu from "./components/AppMenu/index.vue";
</script>

<template>
  <AppMenu />
  <router-view></router-view>
</template>

<style lang="scss">
html,body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  background: #FCFCFC;
}
</style>
