<script lang="ts" setup>
import { useMenu } from "../../uses/use-menu";
import avatar from "@/assets/avatar/user.png";

const { foldMenu } = useMenu();
</script>

<template>
  <div
    class="user-profile full-width column items-center transition-1"
    :class="{ fold: foldMenu }"
  >
    <div class="user-profile-card rounded-borders transition-1" :class="{
      [`q-pa-${foldMenu ? 'sm' : 'md'}`]: true
    }">
      <div class="row no-wrap">
        <!-- 头像 -->
        <div class="user-avatar">
          <img :src="avatar" />
          <span class="dot">
            <q-icon class="text-amber" name="fas fa-flag" />
          </span>
        </div>

        <!-- 信息 -->
        <div class="info transition-1">
          <div class="username ellipsis full-width">MuziTianxin</div>
          <div class="user-role text-caption text-grey ellipsis full-width">
            Administrator
          </div>
        </div>
      </div>

      <btn
        class="full-width q-mt-md"
        type="translucent"
        color="red"
        :label="foldMenu ? '' : 'Logout'"
        icon="fas fa-arrow-right-from-bracket"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-profile {
  &-card {
    width: 160px;
    margin-bottom: 30px;
    box-shadow: 25px 26px 40px rgba(0, 0, 0, 0.05);
    background-color: var(--app-menu-item-user-card-bg);
    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      position: relative;

      & > img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
      }

      & > .dot {
        display: block;
        position: absolute;
        right: -5px;
        top: -2px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        transform: scale(0.7);
        transform-origin: top right;
        backdrop-filter: blur(5px) saturate(180%);
        -webkit-backdrop-filter: blur(5px) saturate(180%);
        text-align: center;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        font-size: 0.7rem;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 2px -4px 20px rgba(0, 0, 0, 0.06);
      }
    }

    .info {
      margin-left: 10px;
      width: 80px;
      overflow: hidden;
      .username {
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--text-color);
      }
    }
  }

  &.fold {
    .user-profile-card {
      width: 50px;

      .info {
        margin-left: 0;
        width: 0;
      }
    }
  }
}

</style>
