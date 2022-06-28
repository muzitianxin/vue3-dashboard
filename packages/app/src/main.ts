import "animate.css";
import { createApp } from "vue";
import { Quasar } from "quasar";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";
import router from "./router/index";
import quasarOptions from "./quasar";

import { vCountUp } from "./directives/count-up.directive";
import { registerGlobalComponents } from "./global-components";
import { vClickOutSide } from "./directives/click-outside.directive";

import "./styles/common.scss";
import "./styles/variables.scss";

export const vm = registerGlobalComponents(createApp(App))
  .use(Quasar, quasarOptions)
  .use(router)
  .use(autoAnimatePlugin)
  .directive("click-outside", vClickOutSide)
  .directive("count-up", vCountUp)
  .mount("#app");
