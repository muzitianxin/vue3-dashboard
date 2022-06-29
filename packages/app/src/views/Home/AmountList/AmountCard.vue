<script lang="ts" setup>
import { defineProps, PropType, ref, computed } from "vue";
import { AmountItem } from "./amount-list";

const props = defineProps({
  item: { type: Object as PropType<AmountItem>, required: true },
});

const badgeColor = computed(() => {
  const dict = {
    PENDING: "#FFB61F",
    PAID: "#32B420",
    CANCELED: "#FF5252",
  };
  return dict[props.item.status];
});

const up = ref(false);
</script>

<template>
  <div
    class="full-width home-amount-card row no-wrap items-center justify-between transition-1"
  >
    <div class="row justify-center">
      <div
        class="home-amount-card-icon row no-wrap items-center justify-center"
        :style="{ color: item.color }"
      >
        <q-icon :name="item.icon" />
      </div>
    </div>

    <div class="row no-wrap items-center">
      <q-icon
        :style="{
          transform: `rotate(${up ? 180 : 0}deg)`,
          color: up ? '#F16063' : '#2CEF9E',
        }"
        size="0.7rem"
        class="q-mr-xs"
        name="fas fa-arrow-down"
      />
      <div>
        <div
          class="home-amount-card-amount"
          v-count-up="{ endVal: item.amount, prefix: '$' }"
        ></div>
        <div class="home-amount-card-caption text-caption">
          {{ item.caption }}
        </div>
      </div>
    </div>

    <div class="relative-position">
      <div
        class="home-amount-card-status"
        :style="{ '--color': badgeColor, '--bg-color': `${badgeColor}30` }"
      >
        {{ item.status }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-amount-card {
  border-radius: 12px;
  padding: 10px 0;
  cursor: pointer;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0), 0px 0px 10px rgba(0, 0, 0, 0),
    0px 15px 30px rgba(0, 0, 0, 0);
  background-color: transparent;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02),
      0px 0px 10px rgba(0, 0, 0, 0.02), 0px 15px 30px rgba(0, 0, 0, 0.05);
    background-color: #fff;
  }

  & > div {
    width: 33.333%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &-icon {
    width: 36px;
    height: 36px;
    border: 1px dashed currentColor;
    border-radius: 10px;
    opacity: 0.85;
  }

  &-status {
    text-align: center;
    font-size: 0.7rem;
    letter-spacing: 0;
    font-weight: 500;
    height: 30px;
    border-radius: 15px;
    color: var(--color);
    background-color: var(--bg-color);
    padding: 5px 12px;
    width: fit-content;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.5);
  }

  &-amount {
    font-size: 0.7rem;
    font-weight: 500;
  }
  &-caption {
    font-size: 0.7rem;
    white-space: nowrap;
    transform: scale(0.6);
    transform-origin: 0% 50%;
    opacity: 0.4;
  }
  &-amount,
  &-caption {
    line-height: 1.1;
    color: var(--text-color);
  }
}
</style>
