import { RouteRecordRaw } from "vue-router";
import Continents from '../pages/Continents/Continents.vue'
import Europe from "../pages/Continents/Europe.vue";

export enum ContinentRouteNames {
  Continents = 'Continents',
  EuropeContinent = 'EuropeContinent',
}

export const continentRoutes: Array<RouteRecordRaw> = [
  {
    path: 'continent',
    name: ContinentRouteNames.Continents,
    component: Continents,
    children: [
      {
        path: 'europe',
        name: ContinentRouteNames.EuropeContinent,
        component: Europe,
      }
    ]
  },
]