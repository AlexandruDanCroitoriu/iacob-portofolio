import { createRouter, createWebHistory } from 'vue-router'

// Get base path from Vite config
const base = import.meta.env.BASE_URL

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../components/Schedule.vue')
  }
]

const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router
