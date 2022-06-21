<script lang="ts" setup>
import Search from "./header/Search.vue";
import GitRef from "./header/GitRef.vue";
import TinyCalendar from "./header/TinyCalendar.vue";
import FireBadge from "./header/FireBadge.vue";
import SmallBadges from "./header/SmallBadges.vue";
</script>

<template>
  <div id="home-page" class="q-pa-xl">
    <header
      class="home-header full-width row reverse justify-between items-center"
    >
      <div class="row no-wrap items-center">
        <Search />
        <GitRef class="q-ml-md" />
      </div>

      <div class="row no-wrap items-center">
        <TinyCalendar />
        <q-separator spaced="20px" color="grey-3" vertical />
        <FireBadge class="q-mr-md" />
        <SmallBadges />
      </div>
    </header>
    <q-separator spaced="30px" color="grey-3" />
  </div>
</template>
