import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import Continents from '../pages/Continents/Continents.vue'
import { continentRoutes } from './continents'
import { earthMapRoutes } from './map'

export enum RouteNames {
  MainPage = 'MainPage',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage,
    name: RouteNames.MainPage,
    children: [
      ...earthMapRoutes,
      ...continentRoutes,
    ]
  },
]

const router = createRouter({
  history: createWebHistory('/currency-collection/'),
  routes,
})

export default router
