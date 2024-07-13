import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/comparison",
    name: "Comparison",
    component: () => import("../views/Comparison.vue"),
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () => import("../views/Reservation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
