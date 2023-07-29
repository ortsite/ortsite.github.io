import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // Use 404View.vue for 404 errors
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
