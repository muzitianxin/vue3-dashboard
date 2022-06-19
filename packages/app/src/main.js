import App from "./App.vue";
import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarOptions from "./quasar";

createApp(App).use(Quasar, quasarOptions).mount("#app");
