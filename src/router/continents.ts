import { RouteRecordRaw } from "vue-router";
import Continents from '../pages/Continents/Continents.vue'
import ContinentPage from "../pages/Continents/ContinentPage.vue";

export enum ContinentRouteNames {
  Continents = 'Continents',
  Continent = 'Continent',
}

export const continentRoutes: Array<RouteRecordRaw> = [
  {
    path: 'continents',
    name: ContinentRouteNames.Continents,
    component: Continents,
    children: [
      {
        path: ':continentName/continent',
        name: ContinentRouteNames.Continent,
        component: ContinentPage,
      }
    ]
  },
]