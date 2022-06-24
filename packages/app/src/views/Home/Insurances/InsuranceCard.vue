<script lang="ts" setup>
import { CountUp } from "countup.js";
import { defineProps, ref, onMounted, reactive } from "vue";

import TinyLineChart from "./TinyLineChart.vue";
import Btn from "../../../components/base/Btn/Btn.vue";

import { randomInt } from "../../../utils/random-int";
import { dom } from "quasar";

defineProps({
  pinned: { type: Boolean, default: false },
  title: { type: String, default: "Title" },
  subtitle: { type: String, default: "Subtitle" },
  color: { type: String, default: "#F1C40F" },
  icon: { type: String },
  primary: { type: String, default: null },
});
const subtitleNum = ref();
const count = ref();
const countPercent = ref();
const countDown = ref();
const countUp = ref();
const countCollect = ref();
const card = ref();
const transform = ref("none");
const transformShadow = ref("none");
const highlightStyle = ref({ transform: "none", opacity: "0" });

const applyCountUp = (dom: any, random?: number, opts?: any) => {
  if (!random) random = randomInt(9999);
  let { prefix } = opts || {};
  if (prefix === undefined)
    prefix = Math.random() < 0.3 ? "+" : Math.random() < 0.7 ? "-" : "";
  const countUp = new CountUp(dom, random, { ...(opts || {}), prefix });
  countUp.start();
};

onMounted(() => {
  applyCountUp(subtitleNum.value);
  applyCountUp(count.value, randomInt(99999), { prefix: "$" });
  applyCountUp(countPercent.value, randomInt(99), { suffix: "%" });
  applyCountUp(countDown.value, randomInt(99999), { prefix: "" });
  applyCountUp(countUp.value, randomInt(99999), { prefix: "" });
  applyCountUp(countCollect.value, randomInt(200), { prefix: "" });
});

const handleMouseover = (e: MouseEvent) => {
  if (!card.value) return;
  const cX = e.clientX,
    cY = e.clientY,
    dim = card.value.getBoundingClientRect(),
    eX = cX - dim.left,
    eY = cY - dim.top,
    w = dim.width / 2,
    h = dim.height / 2,
    tiltLimit = 15,
    posX = (h - eY) * (tiltLimit / h),
    posY = (w - eX) * (tiltLimit / w) * -1;

  transform.value = `rotateX(${posX}deg) rotateY(${posY}deg)`;
  transformShadow.value = `${posY * -1}px ${
    posX + 14
  }px 24px 0 rgba( 0, 0, 0, 0.02 )`;
  highlightStyle.value = {
    transform: `translate3d(${posX * -4}px, ${posY * -4}px, 0)`,
    opacity: "1",
  };
};
const handleMouseout = (e: MouseEvent) => {
  transform.value = "none";
  transformShadow.value = "none";
  highlightStyle.value = { transform: "none", opacity: "0" };
};
</script>

<template>
  <div
    ref="card"
    class="insurance-card"
    :class="{ pinned }"
    :style="{ '--color': color, '--q-primary': primary }"
    @mouseover.capture="handleMouseover"
    @mouseleave="handleMouseout"
  >
    <div
      class="fit insurance-card-mask"
      :style="{
        transform,
        boxShadow: transformShadow,
        transition: 'all 0.25s ease',
      }"
    >
      <div class="fit relative-position insurance-card-display column no-wrap">
        <header class="row no-wrap items-center justify-between">
          <div class="row no-wrap items-center">
            <div class="insurance-card-icon transition-1">
              <q-icon :name="icon" size="1rem" />
            </div>
            <div class="q-ml-sm insurance-card-brief">
              <div class="insurance-card-title">
                {{ title }}
              </div>
              <div class="insurance-card-subtitle">
                <span ref="subtitleNum" class="q-mr-xs"></span>
                <span>{{ subtitle }}</span>
              </div>
            </div>
          </div>

          <div class="row no-wrap items-center">
            <q-icon
              name="fas fa-thumbtack"
              size="12px"
              class="q-mr-xs text-white"
              v-if="pinned"
              style="transform: scale(0.7) rotate(45deg)"
            />
            <Btn
              type="flat"
              icon="fas fa-angle-right"
              class="q-pa-xs"
              :size="24"
              :color="pinned ? 'white' : 'primary'"
            />
          </div>
        </header>

        <main
          class="row no-wrap justify-between items-center col-grow"
          style="height: 0"
        >
          <div class="row no-wrap items-center">
            <div class="insurance-card-count" ref="count"></div>
            <div class="insurance-card-count-percent" ref="countPercent"></div>
          </div>

          <TinyLineChart
            :gap="randomInt(5, 1)"
            style="width: 100px; height: 50px"
            :color="color"
          />
        </main>

        <footer class="row no-wrap items-center justify-between">
          <div class="row no-wrap items-center tiny-count down-count">
            <q-icon name="fas fa-arrow-down" style="color: #1abc9c" />
            <span ref="countDown"></span>
            <span class="unit">USD</span>
          </div>

          <div class="row no-wrap items-center tiny-count up-count">
            <q-icon name="fas fa-arrow-up" style="color: #ff3938" />
            <span ref="countUp"></span>
            <span class="unit">USD</span>
          </div>

          <div class="row no-wrap items-center tiny-count collect-count">
            <q-icon name="far fa-star" style="color: #f1c40f" />
            <span ref="countCollect"></span>
            <span class="unit">VIP</span>
          </div>
        </footer>
      </div>
      <div class="insurance-card-highlight-mask fit absolute">
        <!-- <div class="insurance-card-highlight" :style="highlightStyle"></div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.insurance-card {
  border-radius: var(--home-card-border-radius);
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.1s ease;

  perspective: 600px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;

  &-icon {
    width: 40px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    border-radius: 10px;
    border: 1px dashed currentColor;
    opacity: 0.8;
    color: var(--color);
  }

  &-display {
    z-index: 1;
    padding: 30px;
    border-radius: inherit;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.02),
      0px 10px 40px rgba(0, 0, 0, 0.03);
  }
  &-mask {
    border-radius: inherit;
    background-color: #fff;
  }
  &-brief {
    color: var(--text-color);
    line-height: 1.3;
  }
  &-title {
    font-size: 1rem;
    font-weight: 500;
  }
  &-subtitle {
    font-size: 0.7rem;
    opacity: 0.4;
  }
  &-count {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--text-color);
  }
  &-count-percent {
    margin-left: 10px;
    color: var(--color);
  }
  &-highlight-mask {
    left: 0;
    top: 0;
    border-radius: inherit;
    position: absolute;
    overflow: hidden;
  }
  &-highlight {
    display: block;
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    right: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.25s ease;
    background: radial-gradient(
      150px at 50%,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .tiny-count {
    font-size: 0.7rem;
    font-weight: bold;
    span:nth-child(2) {
      margin: 0 3px;
    }
    & .unit {
      opacity: 0.2;
    }
  }

  &:hover {
    transform: scale(1.05);
    .insurance-card-icon {
      opacity: 1;

      i {
        animation: jump 0.6s ease 0.2s 1 normal forwards;
      }
      @keyframes jump {
        0% {
        }
        50% {
          transform: translateY(-5px) scale(1.05) rotate(-20deg);
        }
      }
    }
  }

  &:nth-child(1) {
    margin-left: 0px;
  }
  &:nth-last-child(1) {
    margin-right: 0px;
  }

  &.pinned {
    .insurance-card-mask {
      background-color: var(--q-primary);
    }

    box-shadow: none;

    & .insurance-card-mask::after,
    & .insurance-card-mask::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      z-index: 0;
    }

    & .insurance-card-mask::before {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.2)
      );
    }
    & .insurance-card-mask::after {
      box-shadow: 0px 20px 20px var(--q-primary), 0px 10px 40px var(--q-primary);
      opacity: 0.12;
    }

    .insurance-card-icon {
      color: #fff;
    }
    .insurance-card-brief {
      color: #fff;
    }
    .insurance-card-count {
      color: #fff;
    }

    .tiny-count {
      color: #fff;
    }
  }
}
</style>
