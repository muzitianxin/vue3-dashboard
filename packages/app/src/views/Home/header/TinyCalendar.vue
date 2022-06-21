<script lang="ts" setup>
import Btn from "../../../components/base/Btn/Btn.vue";
import moment from "moment";
import { onMounted, ref } from "vue";
import { CountUp } from "countup.js";

const now = moment();
const date = now.format("D");
const month = now.format("MMM");
const today = ref(moment().format("YYYY/MM/DD"));

const dateSpan = ref();
onMounted(() => {
  const countUp = new CountUp(dateSpan.value, parseInt(date), {
    duration: 1,
  });
  if (!countUp.error) countUp.start();
});
</script>

<template>
  <div>
    <Btn type="flat" :label="date" color="grey-10">
      <div class="row no-wrap items-center">
        <q-icon name="fas fa-calendar-days" size="0.9rem" />
        <div class="q-ml-sm">
          <span
            ref="dateSpan"
            class="q-mr-xs"
            style="display: inline-block; min-width: 20px"
          ></span>
          <span>{{ month }}</span>
        </div>
      </div>
    </Btn>
    <q-menu :offset="[0, 5]">
      <q-card>
        <q-date v-model="today"></q-date>
      </q-card>
    </q-menu>
  </div>
</template>
