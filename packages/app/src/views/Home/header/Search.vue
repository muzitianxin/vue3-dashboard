<script lang="ts" setup>
import { ref } from "vue";
import SearchList from "./SearchList.vue";

const keyword = ref("");
const showMenu = ref(false);
</script>

<template>
  <div class="home-search">
    <q-input
      @focus="() => (showMenu = true)"
      @blur="() => (showMenu = false)"
      label="Search in home"
      dense
      filled
      v-model="keyword"
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
            <SearchList :keyword="keyword" />
          </div>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
.home-search {
  max-width: 250px;
  position: relative;

  &-dropdown {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: 0;
    width: 100%;
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05), 0px 4px 14px rgba(0, 0, 0, 0.04);
    padding: 10px;
    z-index: 1;
  }
}
</style>
