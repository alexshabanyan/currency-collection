import { ContinentRouteNames } from "../../router/continents";

export enum Continent {
  AFRICA = 'AFRICA',
  EUROPE = 'EUROPE',
  ASIA = 'ASIA',
  NORTH_AMERICA = 'NORTH_AMERICA',
  SOUTH_AMERICA = 'SOUTH_AMERICA',
  AUSTRALIA = 'AUSTRALIA',
  ANTARCTICA = 'ANTARCTICA',
}

export interface ContinentInfo {
  continent: Continent,
  name: string,
  routeName?: ContinentRouteNames,
}