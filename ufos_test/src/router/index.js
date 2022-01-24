import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'
import About from '../views/About.vue'
import Slot from '../views/Slot.vue'
import SlotLayout from '../layouts/SlotLayout.vue'

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: () => import('../views/ToDo'),
    meta: {
        layout: 'DefaultLayout'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
        layout: 'DefaultLayout'
    }
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/Slot.vue'),
    meta: {
        layout: 'SlotLayout.vue'
    }
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
