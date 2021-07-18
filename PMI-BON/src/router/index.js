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
      {
        path: "profile",
        component: () => import("@/views/UserProfile.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "details-volunteer/:id",
        component: () => import("@/views/DetailsVolunteer.vue"),
        props: true,
        meta: {
          auth: true,
        },
      },
      {
        path: "profile-volunteer/",
        component: () => import("@/views/VolunteerProfile.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "detail-blog",
        component: () => import("@/views/DetailBlog.vue"),
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
  const tokenUser = await store.get("accessUser");
  const tokenVolunteer = await store.get("accessVolunteer");
  let token;

  if (tokenUser) {
    token = tokenUser;
  } else if (tokenVolunteer) {
    token = tokenVolunteer;
  }

  if (to.matched.some((record) => record.meta.auth) && !token) {
    next({ path: "/tabs/login" });
    return;
  }

  if (to.path == "/tabs/register" && token) {
    next({ path: "/tabs/home" });
    return;
  }

  if (to.path == "/tabs/register-volunteer" && token) {
    next({ path: "/tabs/home" });
    return;
  }

  if (to.path == "/tabs/login" && tokenUser) {
    next({ path: "/tabs/profile" });
    return;
  }

  if (to.path == "/tabs/login-volunteer" && tokenUser) {
    next({ path: "/tabs/profile" });
    return;
  }

  if (to.path == "/tabs/login-volunteer" && tokenVolunteer) {
    next({ path: "/tabs/profile-volunteer" });
    return;
  }

  if (to.path == "/tabs/login" && tokenVolunteer) {
    next({ path: "/tabs/profile-volunteer" });
    return;
  }

  if (to.path == "/tabs/profile" && tokenVolunteer) {
    next({ path: "/tabs/profile-volunteer" });
    return;
  }

  if (to.path == "/tabs/profile-volunteer" && tokenUser) {
    next({ path: "/tabs/profile" });
    return;
  }
  next();
});

export default router;
