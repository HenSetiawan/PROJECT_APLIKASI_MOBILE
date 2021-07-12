import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../views/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "voluntter",
        component: () => import("@/views/Volunteer.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/LoginPage.vue"),
      },
      {
        path: "events",
        component: () => import("@/views/Events.vue"),
      },
      {
        path: "blogs",
        component: () => import("@/views/Blogs.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
