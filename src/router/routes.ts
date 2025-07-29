import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/login",
    component: () => import ("@/views/LoginView.vue"),
  }
]


export default routes;