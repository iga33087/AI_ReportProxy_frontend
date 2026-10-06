import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title:'Home',
      //show:true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {
      title:'History',
    },
    component: () => import('../views/History.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    meta: {
      title:'Setting',
    },
    component: () => import('../views/Setting.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router