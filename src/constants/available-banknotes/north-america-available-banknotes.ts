import { Continent } from "../../world-geo-data/types";
import { AvailableBanknoteExpand } from "./types";

export const northAmericaAvailableBanknotes = [
  { country: 'Dominican Rep.' },
  { country: 'Cuba' },
  { country: 'United States of America' },
  { country: 'Honduras' }
];

export const northAmericaEuropeAvailableBanknotes = (): AvailableBanknoteExpand[] => 
  northAmericaAvailableBanknotes.map((item) => ({ ...item, continent: Continent.NORTH_AMERICA }));