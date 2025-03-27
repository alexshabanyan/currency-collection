import { Route } from "ant-design-vue/es/breadcrumb/Breadcrumb";
import { RouteNames } from "../../router";
import { ContinentRouteNames } from "../../router/continents";
import { EarthMapRouteNames } from "../../router/map";

export interface MenuListItem {
  name: string,
  routeName: RouteNames | EarthMapRouteNames | ContinentRouteNames,
}

export const menuList: MenuListItem[] = [
  {
    name: 'Главная страница',
    routeName: RouteNames.MainPage,
  },
  {
    name: 'Карта мира',
    routeName: EarthMapRouteNames.EarthMap,
  },
  {
    name: 'Континенты',
    routeName: ContinentRouteNames.Continents,
  }
];