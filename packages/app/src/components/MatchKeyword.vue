<script lang="tsx" setup>
import { defineProps, defineEmits, RenderFunction, computed } from "vue";

const props = defineProps({
  text: { type: String, required: true },
  keyword: { type: String, required: true },
  matchClass: { type: String, default: "highlight" },
  matchTag: { type: String, default: "span" },
});

const html = computed(() => {
  const text = props.text;
  const keyword = props.keyword;
  const matchClass = props.matchClass;
  const matchTag = props.matchTag;

  const reg = new RegExp(keyword, "gi");
  const html = text.replace(
    reg,
    `<${matchTag} class="${matchClass}">$&</${matchTag}>`
  );
  return html;
});
</script>

<template>
  <div v-html="html"></div>
</template>
