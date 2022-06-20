import App from "./App.vue";
import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarOptions from "./quasar";
import router from "./router/index";
import "./styles/common.scss";
import "./styles/variables.scss";
import "animate.css";
import { registerGlobalComponents } from "./global-components";

export const vm = registerGlobalComponents(createApp(App))
  .use(Quasar, quasarOptions)
  .use(router)
  .mount("#app");
