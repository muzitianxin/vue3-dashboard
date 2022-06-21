<script lang="ts" setup>
import { CountUp } from "countup.js";
import { onMounted, ref } from "vue";

const count = ref();

onMounted(() => {
  const countUp = new CountUp(count.value, 120, { prefix: "+" });
  if (!countUp.error) countUp.start();
});
</script>

<template>
  <div class="fire-badge row no-wrap items-center">
    <div class="fire-badge-icon row no-wrap items-center justify-center">
      <q-icon name="fas fa-fire" size="0.9rem" color="white" />
    </div>
    <div class="fire-badge-label column q-ml-sm">
      <div class="text-bold">Fire Cases</div>
      <div ref="count" class="text-caption"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fire-badge {
  width: 150px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  padding: 7px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.02);

  &-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ec7f00;
  }

  &-label {
    & > div {
      line-height: 1.1;
    }
    & > div:nth-child(2) {
      color: #ec7f00;
      font-weight: 500;
    }
  }
}
</style>
