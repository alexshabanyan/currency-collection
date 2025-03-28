import { Continent } from "../../world-geo-data/types";
import { AvailableBanknoteExpand } from "./types";

export const southAmericaAvailableBanknotes = [
  { country: 'Brazil' },
  { country: 'Venezuela' },
  { country: 'Argentina' }
];

export const southAmericaEuropeAvailableBanknotes = (): AvailableBanknoteExpand[] => 
  southAmericaAvailableBanknotes.map((item) => ({ ...item, continent: Continent.SOUTH_AMERICA }));