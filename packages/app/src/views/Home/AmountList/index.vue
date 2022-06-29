<script lang="ts" setup>
import { computed, Ref } from "vue";
import { useStorage } from "@vueuse/core";

import Sorter from "./Sorter.vue";
import AmountCard from "./AmountCard.vue";

import { amountList, AmountItem } from "./amount-list";

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
  <div class="amount-list column no-wrap fit">
    <header class="full-width q-pt-lg q-px-md">
      <!-- <div class="row no-wrap items-center"> -->
      <Sorter :items="orderItems" v-model:field="field" v-model:order="order" />
      <!-- </div> -->
    </header>

    <main class="col-grow column no-wrap" style="height: 0">
      <div class="amount-list-header q-px-md q-mt-md">
        <div class="row no-wrap items-center">
          <div class="active">Type</div>
          <div>Amount</div>
          <div>Status</div>
        </div>
      </div>

      <q-scroll-area class="none-scroll-x col-grow" style="height: 0">
        <ul v-auto-animate class="full-width q-px-md q-pt-md">
          <AmountCard v-for="item in sortedList" :key="item.id" :item="item" />
        </ul>
      </q-scroll-area>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.amount-list {
  border-radius: var(--home-card-border-radius);
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02),
    0px 10px 40px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  &-header {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.7rem;

    & > div {
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-right: none;
      border-left: none;
      padding: 3px 0;
    }
    & > div > div {
      width: 0;
      flex-grow: 1;
      text-align: center;
      transform: scale(0.7);
      font-weight: 500;
      &.active {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>

<style lang="scss">
.none-scroll-x {
  .q-scrollarea__content {
    width: 100%;
  }
}
</style>
