import Vue from 'vue';
import VueRouter from 'vue-router';

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
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Home/Dashboard/Dashboard.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
