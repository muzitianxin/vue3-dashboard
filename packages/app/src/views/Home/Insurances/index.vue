<script lang="ts" setup>
import Indicators from "./Indicators.vue";
import { useStorage } from "@vueuse/core";
import { insuranceList, Insurance } from "./insurance-list";
import { computed } from "vue";
import InsuranceCard from "./InsuranceCard.vue";

const groupedInsurancelist = computed(() => {
  return insuranceList.reduce((group, curr) => {
    const groupKey = curr.group;
    if (!group[groupKey]) group[groupKey] = [];
    group[groupKey].push(curr);
    return group;
  }, [] as Array<Insurance>[]);
});

const activeTab = useStorage("home-insurances-active-tab", 0);
</script>

<template>
  <div class="insurances">
    <header class="full-width row no-wrap justify-between items-center q-px-xl">
      <h4>Available Insurances</h4>
      <Indicators v-model="activeTab" :count="groupedInsurancelist.length" />
    </header>

    <q-tab-panels
      v-model="activeTab"
      animated
      class="full-width bg-transparent"
      style="height: 270px"
    >
      <q-tab-panel
        v-for="(group, index) in groupedInsurancelist"
        :key="index"
        :name="index"
        class="row no-wrap q-px-none q-px-xl q-pb-xl q-pt-lg"
      >
        <InsuranceCard
          class="col-grow full-height"
          style="width: 0"
          v-for="card in group"
          :key="card.id"
          :pinned="card.pinned"
          :title="card.title"
          :subtitle="card.subtitle"
          :icon="card.icon"
          :color="card.color"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
