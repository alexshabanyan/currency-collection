import { Continent } from "../../types/continents/types";

export interface AvailableBanknote {
  country: string,
}

export interface AvailableBanknoteExpand extends AvailableBanknote {
  continent: Continent,
}