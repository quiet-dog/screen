import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
import layout from "../layout/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../view/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
