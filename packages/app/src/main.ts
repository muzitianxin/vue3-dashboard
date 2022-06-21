import "animate.css";
import { createApp } from "vue";
import { Quasar } from "quasar";

import App from "./App.vue";
import router from "./router/index";
import quasarOptions from "./quasar";

import { registerGlobalComponents } from "./global-components";

import "./styles/common.scss";
import "./styles/variables.scss";
import { vClickOutSide } from "./directives/click-outside.directive";

export const vm = registerGlobalComponents(createApp(App))
  .use(Quasar, quasarOptions)
  .use(router)
  .directive("click-outside", vClickOutSide)
  .mount("#app");
