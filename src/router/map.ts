import { RouteRecordRaw } from "vue-router";
import Continents from '../pages/Continents/Continents.vue'
import Europe from "../pages/Continents/Europe.vue";
import EarthMap
 from "../pages/EarthMap/EarthMap.vue";

export enum EarthMapRouteNames {
  EarthMap = 'EarthMap',
}

export const earthMapRoutes: Array<RouteRecordRaw> = [
  {
    path: 'map',
    name: EarthMapRouteNames.EarthMap,
    component: EarthMap,
  },
]