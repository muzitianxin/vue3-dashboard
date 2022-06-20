<script lang="ts" setup>
import Search from "./header/Search.vue";
import GitRef from "./header/GitRef.vue";
</script>

<template>
  <div id="home-page">
    <header
      class="
        home-header
        full-width
        q-pa-lg
        row
        reverse
        justfiy-between
        items-center
      "
    >
      <div class="row no-wrap items-center">
        <Search />
        <GitRef class="q-ml-sm" />
      </div>

      <div></div>
    </header>
  </div>
</template>
