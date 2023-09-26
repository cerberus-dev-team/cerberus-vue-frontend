import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/errors/404NotFound.vue"),
    },
    {
      path: "unauthorized",
      name: "Unauthorized",
      component: () => import("../views/errors/401Unauthorized.vue"),
    }
    {
      path: "/auth",
      name: "AuthView",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "login",
          name: "LoginView",
          component: () => import("../views/auth/LoginView.vue"),
        },
        {
          path: "set-password",
          name: "SetPasswordView",
          component: () => import("../views/auth/SetPasswordView.vue"),
        },
        {
          path: "forgot-password",
          name: "ForgotPasswordView",
          component: () => import("../views/auth/ForgotPasswordView.vue"),
        },
      ],
    },
  ],
});

export default router;
