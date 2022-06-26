<script lang="ts" setup>
import Sorter from "./Sorter.vue";
import { useStorage } from "@vueuse/core";

const orderItems = [
  { label: "Last", field: "time" },
  { label: "Amt", field: "amount" },
];

const field = useStorage("__homeAmountListField__", orderItems[0].field);
const order = useStorage("__homeAmountListOrder__", "ASC");
</script>

<template>
  <div class="amount-list">
    <header class="full-width q-pt-lg q-px-md">
      <!-- <div class="row no-wrap items-center"> -->
      <Sorter :items="orderItems" v-model:field="field" v-model:order="order" />
      <!-- </div> -->
    </header>

    <main>

      field: {{ field }}
      <br />
      desc: {{ order }}
    </main>
  </div>
</template>

<style lang="scss" scoped>
.amount-list {
  border-radius: var(--home-card-border-radius);
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02),
    0px 10px 40px rgba(0, 0, 0, 0.04);
}
</style>
