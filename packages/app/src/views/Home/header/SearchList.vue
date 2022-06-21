<script lang="tsx" setup>
import { QItem, QScrollArea } from "quasar";
import { defineProps, computed } from "vue";
import MatchKeyword from "../../../components/MatchKeyword.vue";
import vueuseApiList from "./vueuse-api-list";

const props = defineProps({
  keyword: { type: String, required: true },
});

const filteredList = computed(() => {
  if (!props.keyword) return vueuseApiList;
  return Object.keys(vueuseApiList).reduce((res: any, key: string) => {
    const items = vueuseApiList[key];
    const filteredItems = items.filter(
      (item) =>
        item.name.toLowerCase().indexOf(props.keyword.toLowerCase()) > -1
    );
    return {
      ...res,
      ...(filteredItems?.length ? { [key]: filteredItems } : {}),
    };
  }, {});
});

const empty = computed(() => {
  return JSON.stringify(filteredList.value) === "{}";
});

const render = () => {
  return !empty.value ? (
    <div class="rounded-borders full-width" style="height: 400px">
      <QScrollArea class="home-search-dropdown-scroll fit">
        <div class="search-list">
          {Object.keys(filteredList.value).map((key) => {
            return (
              <div class="list-block">
                <h6 class="q-px-sm">{key}</h6>
                <div class="block-list">
                  {(filteredList.value as any)[key].map((item: any) => {
                    return (
                      <QItem clickable dense class="list-item column q-px-sm ">
                        <a>
                          <MatchKeyword
                            text={item.name}
                            keyword={props.keyword}
                            matchClass="highlight"
                          ></MatchKeyword>
                        </a>
                        <span class="ellipsis">{item.desc}</span>
                      </QItem>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </QScrollArea>
    </div>
  ) : (
    <div></div>
  );
};
</script>

<template>
  <render />
</template>

<style lang="scss">
.home-search-dropdown-scroll .q-scrollarea__content {
  width: 100%;
  overflow-x: hidden;
}
.search-list {
  padding: 10px;
  max-width: 100%;
  overflow: hidden;
  .list-block {
    &:not(:nth-last-child(1)) {
      margin-bottom: 40px;
    }
    h6 {
      font-size: 0.8rem;
      margin-bottom: 10px;
    }

    .list-item {
      &:not(:nth-last-child(1)) {
        margin-bottom: 5px;
      }
      & > a {
        font-size: 0.8rem;
        color: var(--home-header-search-list-item-name-color);
        & .highlight {
          font-weight: bold;
        }
      }
      & > span {
        font-size: 0.7rem;
        display: block;
        color: var(--home-header-search-list-item-desc-color);
      }
    }
  }
}
</style>
