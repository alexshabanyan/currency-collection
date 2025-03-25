import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MainPage },
]

const router = createRouter({
  history: createWebHistory('/currency-collection/'), // <- важный момент
  routes,
})

export default router
