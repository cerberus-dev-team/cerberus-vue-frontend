import { createRouter, createWebHistory } from "vue-router";
import app from "../main.js";
import Cookies from "js-cookie";

const isUserAuthenticated = () => {
  return Cookies.get("authData");
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/errors/404NotFound.vue"),
    },
    {
      path: "/unauthorized",
      name: "Unauthorized",
      meta: { requiresAuth: false },
      component: () => import("../views/errors/401Unauthorized.vue"),
    },
    {
      path: "/",
      name: "AuthView",
      component: () => import("../layouts/AuthLayout.vue"),
      meta: { requiresAuth: false },
      children: [
        {
          path: "",
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
    {
      path: "/home",
      name: "MainView",
      component: () => import("../layouts/HomeLayout.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "HomeView",
          component: () => import("../views/home/HomeView.vue"),
        },
        {
          path: "alertas",
          name: "AlertsView",
          component: () => import("../views/home/AlertsView.vue"),
        },
        {
          path: "estadisticas",
          name: "EstadisticasView",
          component: () => import("../views/home/EstadisticasView.vue"),
        },
        {
          path: "practicas-poligonos",
          name: "PracticasPoligonosView",
          component: () => import("../views/home/PracticasPoligonosView.vue"),
        },
        {
          path: "personal",
          name: "PersonalView",
          component: () => import("../views/home/PersonalView.vue"),
        },
        {
          path: "fuerzas-militares",
          name: "FuerzasMilitaresView",
          component: () => import("../views/home/FuerzasMilitaresView.vue"),
        },
        {
          path: "perfil",
          name: "PerfilView",
          component: () => import("../views/home/PerfilView.vue"),
        },
        {
          path: "nodos-seguridad",
          name: "SecurityNodesView",
          component: () => import("../views/home/SecurityNodesView.vue"),
        }
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = Cookies.get("authData");
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = tokenPayload.exp * 1000;
      const currentTime = Date.now();
      if (currentTime > expirationTime) {
        Cookies.remove("authData");
        next({ path: "/" });
      } else {
        next();
      }
    } else {
      next({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
