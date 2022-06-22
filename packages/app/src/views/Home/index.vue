<script lang="ts" setup>
import Agents from "./Agents/index.vue";
import Search from "./header/Search.vue";
import GitRef from "./header/GitRef.vue";
import FireBadge from "./header/FireBadge.vue";
import Insurances from "./Insurances/index.vue";
import SmallBadges from "./header/SmallBadges.vue";
import TinyCalendar from "./header/TinyCalendar.vue";

</script>

<template>
  <div id="home-page">
    <header
      class="home-header full-width row reverse justify-between items-center q-px-xl q-pt-xl"
    >
      <div class="row no-wrap items-center">
        <Search />
        <GitRef class="q-ml-md" />
      </div>

      <div class="row no-wrap items-center">
        <TinyCalendar />
        <q-separator spaced="20px" color="grey-3" vertical />
        <FireBadge class="q-mr-md" />
        <SmallBadges />
      </div>
    </header>
    <div class="full-width q-px-xl q-py-xs">
      <q-separator spaced="30px" color="grey-3" />
    </div>

    <div class="full-width row items-strentch q-pr-xl">
      <Insurances style="width: 0" class="col-grow" />
      <Agents class="home-right-side self-stretch q-mb-xl q-mt-lg" />
    </div>
  </div>
</template>

<style lang="scss">
.home-right-side {
  width: 200px;
}
</style>
