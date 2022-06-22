<script lang="ts" setup>
import avatar01 from "../../../assets/avatar/avatar_01.svg";
import avatar02 from "../../../assets/avatar/avatar_02.svg";
import avatar03 from "../../../assets/avatar/avatar_03.svg";
import avatar04 from "../../../assets/avatar/avatar_04.svg";
import avatar05 from "../../../assets/avatar/avatar_05.svg";
import avatar06 from "../../../assets/avatar/avatar_06.svg";
import avatar07 from "../../../assets/avatar/avatar_07.svg";
import avatar08 from "../../../assets/avatar/avatar_08.svg";
import avatar09 from "../../../assets/avatar/avatar_09.svg";
import avatar10 from "../../../assets/avatar/avatar_10.svg";

const avatars = [
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
];
</script>

<template>
  <div class="avatar-banner">
    <div
      :style="{ animationDelay: `${index * 1 - 20}s` }"
      class="avatar-banner-item"
      v-for="(avatar, index) in avatars"
    >
      <img :src="avatar" draggable="false" />
    </div>
  </div>
</template>

<style lang="scss">
.avatar-banner {
  width: 100px;
  height: 50px;
  position: relative;

  &-item {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: calc(50% - 8px);
    top: 0;
    border: 2px solid #fff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1),
      0px 10px 30px rgba(0, 0, 0, 0.05),
      0px 20px 50px rgba(0, 0, 0, .04);

    animation: play 10s ease 0s infinite normal forwards;

    & > img {
      width: 100%;
      user-select: none;
    }

    @keyframes play {
      0% {
        transform: translateX(0);
        opacity: 1;
        z-index: 2;
      }
      10% {
        transform: translateX(-16px);
        opacity: 1;
        z-index: 1;
      }
      20% {
        transform: translateX(-32px);
        opacity: 1;
        z-index: 0;
      }
      30% {
        transform: translateX(-48px);
        opacity: 0;
        z-index: 0;
      }
      80% {
        transform: translateX(32px);
        opacity: 0;
        z-index: 3;
      }
      90% {
        transform: translateX(16px);
        opacity: 1;
        z-index: 3;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
        z-index: 2;
      }
    }
  }

  &:hover .avatar-banner-item {
    animation-play-state: paused;
  }
}
</style>
