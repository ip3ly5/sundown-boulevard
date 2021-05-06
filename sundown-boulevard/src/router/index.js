import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dish from '../views/Dish.vue'
import Drinks from '../views/Drinks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dish',
    name: 'Dish',
    component: Dish
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
