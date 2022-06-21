<script lang="ts" setup>
import { nextTick, ref } from "vue";
import SearchList from "./SearchList.vue";

const keyword = ref("");
const showMenu = ref(false);

const show = () => {
  nextTick(() => {
    console.log("show");
    showMenu.value = true;
  });
};
const hide = () => {
  nextTick(() => {
    console.log("hide");
    showMenu.value = false;
  });
};
</script>

<template>
  <div class="home-search" v-click-outside="hide">
    <q-input
      @focus="show"
      label="Search in home"
      dense
      filled
      v-model="keyword"
      for="home-search"
      style="width: 250px"
    >
      <template v-slot:append>
        <q-icon name="fas fa-search" size="0.8rem" />
      </template>
    </q-input>

    <transition
      appear
      :duration="100"
      enter-active-class="animated animate__fadeIn"
      leave-active-class="animated animate__fadeOut"
    >
      <keep-alive>
        <div
          v-if="showMenu"
          class="home-search-dropdown transition-1 rounded-borders"
        >
          <div class="row no-wrap items-center">
            <SearchList :keyword="keyword" class="bg-white" />
          </div>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
.home-search {
  position: relative;

  .q-field--filled .q-field__control {
    background-color: white;
  }
  .q-field--filled .q-field__control::before {
    background-color: #fff;
  }

  &-dropdown {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: 0;
    width: 100%;
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05), 0px 4px 14px rgba(0, 0, 0, 0.04);
    z-index: 1;
  }
}
</style>
