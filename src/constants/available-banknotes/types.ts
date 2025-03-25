import { Continent } from "../../world-geo-data/types";

export interface AvailableBanknote {
  country: string,
}

export interface AvailableBanknoteExpand extends AvailableBanknote {
  continent: Continent,
}