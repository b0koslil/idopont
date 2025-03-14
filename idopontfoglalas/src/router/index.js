import { createRouter, createWebHistory } from 'vue-router'
import IdopontokView from '../views/IdopontokView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'idopontfoglalas',
      component: IdopontokView,
    },
    {
      path: '/foglalasok',
      name: 'foglalasok',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FoglalasokView.vue'),
    }
  ]
})

export default router
 
