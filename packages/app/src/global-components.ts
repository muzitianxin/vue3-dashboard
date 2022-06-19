import { App } from "vue";
import Btn from "./components/base/Btn/Btn.vue";

export const registerGlobalComponents = (app: App<Element>): App<Element> => {
  app.component("Btn", Btn);
  return app;
};
