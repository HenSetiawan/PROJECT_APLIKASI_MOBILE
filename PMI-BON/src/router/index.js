import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../views/Tabs.vue";
import { Storage } from "@ionic/storage";

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
      {
        path: "register",
        component: () => import("@/views/RegisterUser.vue"),
      },
      {
        path: "register-volunteer",
        component: () => import("@/views/RegisterVolunteer.vue"),
      },
      {
        path: "login-volunteer",
        component: () => import("@/views/LoginVolunteer.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const store = new Storage();
  await store.create();
  const token = await store.get("accessToken");

  if (to.matched.some((record) => record.meta.auth) && !token) {
    next({ path: "/tabs/login" });
    return;
  }
  if (to.path == "/tabs/login" && token) {
    next({ path: "/" });
  }

  if (to.path == "/tabs/login-volunteer" && token) {
    next({ path: "/" });
  }
  next();
});

export default router;
