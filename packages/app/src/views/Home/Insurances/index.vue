<script lang="ts" setup>
import Indicators from "./Indicators.vue";
import { useStorage } from "@vueuse/core";
import { insuranceList, Insurance } from "./insurance-list";
import { computed, onBeforeUnmount, onMounted } from "vue";
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
let autoPlayer: any = null;

onMounted(() => {
  autoPlayer = setInterval(() => {
    activeTab.value = (activeTab.value + 1) % groupedInsurancelist.value.length;
  }, 30000);
});
onBeforeUnmount(() => {
  clearInterval(autoPlayer);
});
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
        class="row no-wrap q-px-none q-pl-xl q-pr-lg q-pb-xl q-pt-lg"
        style="overflow: hidden"
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
          :primary="card.primary"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
