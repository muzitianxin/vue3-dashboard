<script setup lang="ts">
import AppMenu from "./components/AppMenu/index.vue";
</script>

<template>
  <div id="app" class="row no-wrap">
    <AppMenu class="full-height" />
    <router-view class="full-height col-grow" style="width: 0"></router-view>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  background: var(--content-bg);
}
</style>
