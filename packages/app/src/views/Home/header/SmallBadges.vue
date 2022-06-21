<script lang="ts" setup>
import { useStorage } from "@vueuse/core";
import { computed } from "vue";

interface Badge {
  id: string;
  icon: string;
  color: string;
}

const max = 4;
const fullBadges: Badge[] = [
  { id: "1", color: "#6A6CFF", icon: "fas fa-vr-cardboard" },
  { id: "2", color: "#FF3938", icon: "fas fa-burger" },
  { id: "3", color: "#1ABC9C", icon: "fas fa-archway" },
  { id: "4", color: "#F1C40F", icon: "fas fa-basketball" },
];
const activeBadgeState = useStorage(
  "homeHeaderSmallBadges",
  fullBadges.slice(0, 2)
);

const showCreateNew = computed(() => {
  return activeBadgeState.value.length < max;
});

const createNewBadge = () => {
  const badge = fullBadges.find(
    (badge) => !activeBadgeState.value.some((_badge) => _badge.id === badge.id)
  );
  if (!badge) return;
  activeBadgeState.value.push(badge);
};

const removeBadge = (badge: Badge) => {
  const index = activeBadgeState.value.findIndex(
    (_badge) => _badge.id === badge.id
  );
  if (index < 0) return;
  activeBadgeState.value.splice(index, 1);
};
</script>

<template>
  <div class="row no-wrap items-center" v-auto-animate>
    <div
      class="small-badge-item"
      v-for="badge in activeBadgeState"
      :style="{ '--badge-color': badge.color }"
      :key="badge.id"
      @click="removeBadge(badge)"
    >
      <q-icon :name="badge.icon" size="0.9rem" color="white" />
    </div>

    <div
      key="craeteNew"
      v-if="showCreateNew"
      class="small-badge-item create-new-badge text-grey"
      :style="{ '--badge-color': 'transparent' }"
      @click="createNewBadge"
    >
      <q-icon name="fas fa-plus" size="0.9rem" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.small-badge-item {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  background-color: var(--badge-color);
  cursor: pointer;

  &.create-new-badge {
    border: 2px dashed currentColor;
    line-height: 36px;
  }

  &:not(:nth-last-child(1)) {
    margin-right: 10px;
  }

  &:not(.create-new-badge)::after {
    content: "";
    /* width: 0;
    height: 0; */
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: inherit;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 10px 30px var(--badge-color);
    display: block;
    position: absolute;
    opacity: 0;
    transition: all 0.23s ease;
  }

  &:hover {
    &::after {
      opacity: 0.5;
    }
  }
}
</style>
