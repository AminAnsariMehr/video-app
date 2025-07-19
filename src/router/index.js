import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "app",
      component: () => import("@/layouts/DefaultLayout.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "explore",
          name: "explore",
          component: () => import("@/views/explore/ExploreView.vue"),
        },
        {
          path: "post",
          name: "post",
          component: () => import("@/views/post/PostView.vue"),
        },
        {
          path: "likes",
          name: "likes",
          component: () => import("@/views/likes/LikesView.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/profile/ProfileView.vue"),
        },
      ],
    },

    // {
    //   path: "/auth",
    //   name: "auth",
    //   component: () => import("./../layouts/AuthLayout.vue"),
    //   children: [
    //     {
    //       path: "login",
    //       name: "login",
    //       component: () => import("@/views/auth/LoginView.vue"),
    //     },
    //     {
    //       path: "register",
    //       name: "register",
    //       component: () => import("@/views/auth/RegisterView.vue"),
    //     },
    //     {
    //       path: "recovery-password",
    //       name: "recovery-password",
    //       component: () => import("@/views/auth/RecoveryPasswordView.vue"),
    //     },
    //   ],
    // },

    // {
    //   path: "/error",
    //   name: "error",
    //   component: () => import("./../layouts/BlankLayout.vue"),
    //   children: [
    //     {
    //       path: "404",
    //       name: "not-found",
    //       component: () => import("@/views/errors/NotFoundView.vue"),
    //     },
    //   ],
    // },
  ],

  linkActiveClass: "active",
  linkExactActiveClass: "exactActive",
});

export default router;
