import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'
import About from '../views/About.vue'
import Slot from '../views/Slot.vue'
import SlotLayout from '../layouts/Slotlayout.vue'

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: () => import('../views/ToDo'),
    meta: {
        layout: 'Defaultlayout'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
        layout: 'Defaultlayout'
    }
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('@/views/Slot.vue'),
    meta: {
        layout: 'Slotlayout'
    }
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
