import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import ComparisonView from "../views/ComparisonView.vue";
import ReservationView from "../views/ReservationView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/search",
    name: "Search",
    component: SearchView,
  },
  {
    path: "/comparison",
    name: "Comparison",
    component: ComparisonView,
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: ReservationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
