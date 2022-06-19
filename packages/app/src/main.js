import App from "./App.vue";
import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarOptions from "./quasar";
import router from "./router/index";
import "./styles/common.scss";


export const vm = createApp(App)
  .use(Quasar, quasarOptions)
  .use(router)
  .mount("#app");
