import { RouteLocationRaw } from "vue-router";

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  to?: RouteLocationRaw;
}
