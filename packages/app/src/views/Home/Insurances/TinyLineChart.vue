<script lang="ts" setup>
import * as echarts from "echarts";
import { onMounted, ref, watch } from "vue";
import { randomInt } from "../../../utils/random-int";

const props = defineProps({
  color: { type: String, default: "#F1C40F" },
  auto: { type: Boolean, default: true },
  gap: { type: Number, default: 2 },
});
const tinyLineChart = ref();
const length = 15;
let instance: echarts.ECharts | null = null;
let interval: any = 0;

const stopChange = () => {
  if (interval) {
    clearInterval(interval);
    interval = 0;
  }
};

const startChange = () => {
  if (interval) stopChange();
  interval = setInterval(() => {
    if (!instance) return;
    const data = new Array(length).fill(0).map(() => randomInt(100));
    instance.setOption({ series: { data } });
  }, props.gap * 1000);
};

onMounted(() => {
  instance = echarts.init(tinyLineChart.value);
  const hideAxis = {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: { show: false },
  };
  const array = new Array(length).fill(0).map((_, i) => i);
  const data = new Array(length).fill(0).map(() => randomInt(100));

  const opt = {
    xAxis: { ...hideAxis, type: "category", data: array },
    yAxis: { ...hideAxis, type: "value" },
    grid: { top: 0, bottom: 0, left: 0, right: 0, containLabel: false },
    series: {
      type: "line",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: props.color },
          { offset: 0.8, color: props.color + "00" },
        ]),
      },
      itemStyle: {
        color: props.color,
      },
      showSymbol: false,
      animationEasing: "backIn",
      data,
    },
  };
  instance.setOption(opt);
});

watch(
  () => props.auto,
  (a) => {
    if (!a) stopChange();
    else startChange();
  },
  { immediate: true }
);
</script>

<template>
  <div class="tiny-line-chart" ref="tinyLineChart"></div>
</template>
