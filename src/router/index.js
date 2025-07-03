import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Schedule from '../components/Schedule.vue'

// Get base path from Vite config
const base = import.meta.env.BASE_URL

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  }
]

const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router
