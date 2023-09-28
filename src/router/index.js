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
      path: "/unauthorized",
      name: "Unauthorized",
      component: () => import("../views/errors/401Unauthorized.vue"),
    },
    {
      path: "/",
      name: "AuthView",
      component: () => import("../layouts/AuthLayout.vue"),
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
      children:[
      {
        path: "",
        name: "HomeView",
        component: () => import("../views/home/HomeView.vue"),
      },
      {
        path: "cams",
        name: "CamsView",
        component: () => import("../views/home/CamsView.vue"),
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
      }
      ]
    },
  ],
});

export default router;
