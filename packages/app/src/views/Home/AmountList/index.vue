<script lang="ts" setup>
import Sorter from "./Sorter.vue";
import { useStorage } from "@vueuse/core";
import { amountList, AmountItem } from "./amount-list";
import { computed, Ref } from "vue";
import AmountCard from "./AmountCard.vue";

const orderItems: Array<{ label: string; field: keyof AmountItem }> = [
  { label: "Last", field: "time" },
  { label: "Amt", field: "amount" },
];

const field: Ref<keyof AmountItem> = useStorage(
  "__homeAmountListField__",
  orderItems[0].field as any
);
const order = useStorage("__homeAmountListOrder__", "ASC");

const sortedList = computed(() => {
  const sortFn = (ia: AmountItem, ib: AmountItem) => {
    let a = ia[field.value] as number;
    let b = ib[field.value] as number;
    if (field.value === "time") {
      a = (a as unknown as Date).getTime();
      b = (b as unknown as Date).getTime();
    }
    return order.value === "ASC" ? a - b : b - a;
  };
  return amountList.sort(sortFn);
});
</script>

<template>
  <div class="amount-list">
    <header class="full-width q-pt-lg q-px-md">
      <!-- <div class="row no-wrap items-center"> -->
      <Sorter :items="orderItems" v-model:field="field" v-model:order="order" />
      <!-- </div> -->
    </header>

    <main>
      <div class="amount-list-header row no-wrap">
        <div>Type</div>
        <div>Amount</div>
        <div>Status</div>
      </div>

      <ul v-auto-animate>
        <AmountCard v-for="item in sortedList" :key="item.id" :item="item" />
      </ul>
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
