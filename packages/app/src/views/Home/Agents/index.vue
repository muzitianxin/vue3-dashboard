<script lang="ts" setup>
import AvatarBanner from './AvatarBanner.vue';</script>

<template>
  <div class="agents-card column no-wrap items-center justify-center q-pa-md">
    <div
      class="agents-card-badge rounded-borders q-px-md q-py-sm row no-wrap items-center justify-center"
    >
      <q-icon class="q-mr-sm" name="fas fa-star" color="amber" />
      <h6>Agents</h6>
    </div>

    <div class="agents-card-content text-center q-my-md text-caption">
      Meet your agents and see their ranks to get the best results
    </div>

    <AvatarBanner />
  </div>
</template>

<style lang="scss" scoped>
.agents-card {
  border-radius: var(--home-card-border-radius);
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.01),
    0px 20px 40px rgba(0, 0, 0, 0.02);

  &-badge {
    border: 1px dashed #e6e6e6;
  }

  &-content {
    line-height: 1.2;
    font-size: 0.7rem;
    letter-spacing: 0px;
    font-weight: 500;
    opacity: 0.7;
  }
}
</style>
