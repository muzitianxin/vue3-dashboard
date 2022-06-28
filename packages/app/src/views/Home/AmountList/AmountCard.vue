<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref } from "vue";
import { AmountItem } from "./amount-list";

const props = defineProps({
  item: { type: Object as PropType<AmountItem>, required: true },
});
const amount = ref();
</script>

<template>
  <div class="home-amount-card row no-wrap items-center justify-between">
    <div class="home-amount-card-icon">
      <q-icon :name="item.icon" />
    </div>

    <div class="col-grow row no-wrap" style="width: 0">
      <q-icon name="fas fa-angle-down" />
      <div>
        <div ref="amount" v-count-up="item.amount"></div>
        <div class="text-caption text-grey">{{ item.caption }}</div>
      </div>
    </div>

    <div class="home-amount-card-status">
      {{ item.status }}
    </div>
  </div>
</template>
