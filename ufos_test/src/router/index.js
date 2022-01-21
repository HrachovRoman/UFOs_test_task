import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'
import About from '../views/About.vue'
import Slot from '../views/Slot.vue'

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: () => import('@/views/ToDo.vue'),
    meta: {
        layout: 'ToDoLayouts'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
        layout: 'AboutLayouts'
    }
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('@/views/Slot.vue'),
    meta: {
        layout: 'SlotLayouts'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
