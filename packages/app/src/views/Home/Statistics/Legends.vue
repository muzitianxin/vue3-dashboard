<script lang="ts" setup>
import legendA from "./assets/legend_red.svg";
import legendB from "./assets/legend_green.svg";

const legends = [
  { name: "Expenses", asset: legendA },
  { name: "Payments", asset: legendB },
];
</script>

<template>
  <div class="row no-wrap items-center">
    <div
      v-for="(l, index) in legends"
      :key="index"
      class="row no-wrap items-center legend"
    >
      <img style="height: 16px" :src="l.asset" class="q-mr-sm" />
      <span class="text-bold">{{ l.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.legend:not(:nth-last-child(1)) {
  margin-right: 20px;
}
</style>
