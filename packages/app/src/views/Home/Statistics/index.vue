<script lang="ts" setup>
import moment from "moment";
import { merge } from "lodash";
import * as echarts from "echarts";
import { useStorage } from "@vueuse/core";
import { onMounted, ref, watch, Ref, nextTick } from "vue";
import ResizeSensor from "css-element-queries/src/ResizeSensor";

import Legends from "./Legends.vue";
import GroupSelect from "./GroupSelect.vue";

import { randomInt } from "../../../utils/random-int";

enum GroupBy {
  DAY = "Day",
  YEAR = "Year",
  MONTH = "Month",
}

const length = 10;
const chart = ref();
const range = useStorage("home-statistics-range", GroupBy.DAY);
const inited = ref(false);
const dataCache = ref(new Map<GroupBy, Record<"A" | "B", number[]>>());
const allGroupTypes = [GroupBy.DAY, GroupBy.MONTH, GroupBy.YEAR];

let instance: echarts.ECharts | null = null;

const getAxisDataByGroupType = (groupType: GroupBy) => {
  const data = [];
  if (groupType === GroupBy.DAY) {
    for (let i = length - 1; i >= 0; i--) {
      const day = moment().subtract(i, "days");
      data.push(`${day.format("DD")}__${day.format("dd")}`);
    }
  } else if (groupType === GroupBy.MONTH) {
    for (let i = length - 1; i >= 0; i--) {
      const month = moment().subtract(i, "months");
      data.push(`${month.format("MM")}__${month.format("MMM")}`);
    }
  } else if (groupType === GroupBy.YEAR) {
    for (let i = length - 1; i >= 0; i--) {
      const year = moment().subtract(i, "years");
      const raw = year.format("YYYY");
      data.push(`${raw}__`);
    }
  }
  const realValue = ["start", ...data, "end"];
  const helpValue = realValue.map((_, i) => i);
  return { realValue, helpValue };
};

const basesOpt = {
  grid: { top: 20, bottom: 0, left: 10, right: -5, containLabel: true },
  xAxis: {
    type: "category",
    axisLine: { show: false },
    axisTick: { show: false, alignWithLabel: true },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        opacity: 0.5,
      },
    },
    axisLabel: {
      interval: 0,
      rich: {
        bold: {
          fontWeight: "bold",
          fontSize: 14,
          verticalAlign: "bottom",
          padding: [0, 2, 0, 0],
        },
        thin: {
          fontWeight: "normal",
          fontSize: 8,
          verticalAlign: "bottom",
          opacity: 0.5,
        },
      },
      showMaxLabel: "true",
    },
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
    interval: 25,
    max: 100,
    axisLine: { show: true, lineStyle: { color: "#fff" } },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: {
      show: true,
      color: "#34495e",
      fontSize: 8,
      formatter: "{bold|{value}}%",
      verticalAlign: "bottom",
      opacity: 0.5,
      rich: {
        bold: {
          fontWeight: "bold",
          fontSize: 10,
          verticalAlign: "bottom",
          opacity: 0.8,
        },
      },
    },
  },
  series: [
    {
      name: "A",
      type: "line",
      smooth: 0.45,
      showSymbol: false,
      animationEasing: "cubicInOut",
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#FF393890" },
          { offset: 0.8, color: "#FF3938" },
        ]),
        width: 3,
        type: [20, 10],
        dashOffset: 5,
        cap: "round",
        shadowColor: "#FF393840",
        shadowOffsetX: 2,
        shadowOffsetY: 5,
        shadowBlur: 8,
      },
    },
    {
      name: "B",
      type: "line",
      smooth: 0.45,
      showSymbol: false,
      animationEasing: "quadraticOut",
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#51E4A720" },
          { offset: 0.8, color: "#2CEF9E" },
        ]),
        width: 5,
        cap: "round",
        opacity: 0.5,
        shadowColor: "#2CEF9E90",
        shadowOffsetX: 2,
        shadowOffsetY: 8,
        shadowBlur: 10,
      },
    },
  ],
};

const getDataByGroupType = (groupType: GroupBy) => {
  const cache = dataCache.value.get(groupType);
  if (cache) return cache;
  const data = {
    A: new Array(length + 2).fill(0).map(() => randomInt(75, 20)),
    B: new Array(length + 1).fill(0).map(() => randomInt(90, 30)),
  };
  dataCache.value.set(groupType, data);
  return data;
};

const renderChart = (range = GroupBy.DAY) => {
  if (!instance) return;
  const { realValue, helpValue } = getAxisDataByGroupType(range);
  const { A, B } = getDataByGroupType(range);
  let opt = {
    xAxis: {
      data: helpValue,
      axisLabel: {
        formatter: (_: string, index: number) => {
          const value = realValue[index];
          const [bold, thin] = value.split("__");
          if (index === 0 || index === length + 1) return "";
          return `{bold|${bold}}{thin|${thin}}`;
        },
      },
    },
    series: [{ data: A }, { data: B }],
  };
  if (!inited.value) opt = merge(basesOpt, opt);
  setTimeout(() => {
    instance && instance.setOption(opt);
    inited.value = true;
  }, 100);
};

onMounted(() => {
  instance = echarts.init(chart.value);
  renderChart(range.value as GroupBy);

  new ResizeSensor(chart.value, () => instance && instance.resize());
});

watch(
  () => range.value,
  (r) => nextTick(() => r && renderChart(r as GroupBy))
);
</script>

<template>
  <div class="home-statistic column no-wrap bg-white q-pa-lg">
    <header class="row full-width justify-between no-wrap items-center">
      <Legends />
      <GroupSelect :auto-play="3000" v-model="range" :types="allGroupTypes" />
    </header>

    <main ref="chart" class="col-grow full-width" style="height: 0"></main>
  </div>
</template>

<style lang="scss" scoped>
.home-statistic {
  border-radius: var(--home-card-border-radius);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
</style>
