<script lang="ts" setup>
import Agents from "./Agents/index.vue";
import Search from "./header/Search.vue";
import GitRef from "./header/GitRef.vue";
import FireBadge from "./header/FireBadge.vue";
import Statistics from "./Statistics/index.vue";
import Insurances from "./Insurances/index.vue";
import SmallBadges from "./header/SmallBadges.vue";
import TinyCalendar from "./header/TinyCalendar.vue";
import AmountList from "./AmountList/index.vue";
</script>

<template>
  <div id="home-page" class="column no-wrap">
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

    <div class="full-width row col-grow q-px-xl q-pb-xl" style="height: 0">
      <div class="col-grow column no-wrap q-pr-lg" style="width: 0">
        <h4 class="q-mb-lg">Statistic</h4>
        <Statistics class="col-grow full-width" style="height: 0" />
      </div>
      <div class="home-right-side self-stretch">
        <AmountList class="full-height" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-right-side {
  width: 200px;
  flex-shrink: 0;
}
</style>
