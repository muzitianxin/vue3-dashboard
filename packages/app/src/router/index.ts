import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import { appMenuItems } from "../components/AppMenu/libs/menu";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home/index.vue"),
  },

  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/Chat/index.vue"),
  },

  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/Calendar/index.vue"),
  },

  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting/index.vue"),
  },
];

const router = createRouter({
  history: process.env.VITE_GITHUB_PAGES
    ? createWebHashHistory(process.env.BASE_URL)
    : createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  const toId = to.path.split("/")[1];
  const fromId = (from?.path || "").split("/")[1];
  const toIndex = appMenuItems.findIndex((el) => el.id === toId);
  const fromIndex = appMenuItems.findIndex((el) => el.id === fromId);

  const noAnimate = toIndex === fromIndex || toIndex === -1 || fromIndex === -1;
  if (noAnimate) {
    to.meta.transitionName = undefined;
  } else if (toIndex > fromIndex) {
    to.meta.transitionName = "slide-up";
    from.meta.transitionName = "slide-up";
  } else {
    to.meta.transitionName = "slide-down";
    from.meta.transitionName = "slide-down";
  }
});

export default router;
