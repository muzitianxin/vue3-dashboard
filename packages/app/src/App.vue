<script setup lang="ts">
import AppMenu from "./components/AppMenu/index.vue";
</script>

<template>
  <div id="app">
    <div class="_display-frame fit row no-wrap">
      <AppMenu class="full-height" />
      <div class="col-grow full-height relative-position" style="width: 0">
        <router-view class="content-view fit" v-slot="{ Component, route }">
          <transition :name="route.meta.transitionName">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
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
body {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
#app {
  overflow: visible;
  background: var(--content-bg);
  max-width: var(--view-max-width);
  max-height: var(--view-max-height);
  border-radius: var(--view-border-radius);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* &::after {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    background-image: linear-gradient(135deg, #ffffff 0%, #cad0d9 100%);
    z-index: -1;
    border-radius: calc(var(--view-border-radius) + 1px);
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.058),
      0px 0px 5px rgba(0, 0, 0, 0.01), 0px 50px 80px rgba(0, 0, 0, 0.05);
  } */
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.058),
    0px 0px 5px rgba(0, 0, 0, 0.01), 0px 50px 80px rgba(0, 0, 0, 0.05);

  ._display-frame {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .content-view {
    position: relative;
    z-index: 0;
    background: var(--content-bg);
  }
}

.slide-up-enter-active,
.slide-down-enter-active {
  transition: all 0.33s ease;
  position: absolute !important;
}

.slide-up-leave-active,
.slide-down-leave-active {
  transition: all 0.33s ease;
  position: absolute !important;
}

.slide-up-enter-from {
  transform: translateY(100%);
}
.slide-up-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-from {
  transform: translateY(-100%);
}
.slide-down-leave-to {
  transform: translateY(100%);
}
</style>
