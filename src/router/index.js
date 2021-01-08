import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register/Register.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home/Dashboard/Dashboard.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = store.getters;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
