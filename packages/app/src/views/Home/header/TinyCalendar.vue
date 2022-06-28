<script lang="ts" setup>
import Btn from "../../../components/base/Btn/Btn.vue";
import moment from "moment";
import { ref } from "vue";

const now = moment();
const date = now.format("D");
const month = now.format("MMM");
const today = ref(moment().format("YYYY/MM/DD"));
</script>

<template>
  <div>
    <Btn type="flat" :label="date" color="grey-10">
      <div class="row no-wrap items-center">
        <q-icon name="fas fa-calendar-days" size="0.9rem" />
        <div class="q-ml-sm">
          <span
            v-count-up="{ endVal: parseInt(date), duration: 1 }"
            class="q-mr-xs"
            style="display: inline-block; min-width: 20px"
          ></span>
          <span>{{ month }}</span>
        </div>
      </div>
    </Btn>
    <q-menu class="home-tiny-calendar" :offset="[0, 5]">
      <q-card>
        <q-date v-model="today"></q-date>
      </q-card>
    </q-menu>
  </div>
</template>

<style lang="scss">
.home-tiny-calendar {
  .q-card {
    box-shadow: none;
  }
  .q-date__header {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }

  .q-date__navigation {
    color: var(--text-color);
    .q-date__arrow i {
      font-size: 0.7rem;
    }
  }

  .q-date__calendar-weekdays {
    opacity: 0.75;
    font-weight: 500;
  }

  .q-date__calendar-days-container {
    color: var(--text-color);

    .q-date__calendar-item button.bg-primary {
      &::before {
        box-shadow: 0px 2px 2px var(--q-primary);
        opacity: 0.1 !important;
      }
    }
  }
}
</style>
