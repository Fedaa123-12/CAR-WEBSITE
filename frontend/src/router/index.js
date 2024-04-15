import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

const routes = [
  {
    path: '/car/:id',
    name: 'carVue',
    component: () => import('../views/carVue.vue')
  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import('../views/allCars.vue')
  },
  {
    path: "/",
    name : "index",
    component : index
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  }
]





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
