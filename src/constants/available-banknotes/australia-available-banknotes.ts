import { Continent } from "../../world-geo-data/types";
import { AvailableBanknoteExpand } from "./types";

export const australiaAvailableBanknotes = [
  { country: 'Australia' },
];

export const generateAustraliaAvailableBanknotes = (): AvailableBanknoteExpand[] => 
  australiaAvailableBanknotes.map((item) => ({ ...item, continent: Continent.AUSTRALIA }));