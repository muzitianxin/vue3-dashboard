import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
