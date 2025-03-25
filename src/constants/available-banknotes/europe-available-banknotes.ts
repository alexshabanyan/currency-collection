import { Continent } from "../../world-geo-data/types";
import { AvailableBanknoteExpand } from "./types";

export const europeAvailableBanknotes = [
  { country: 'Ukraine' },
  { country: 'Turkey' },
  { country: 'Germany' },
  { country: 'Poland' },
  { country: 'Belarus' },
  { country: 'Slovenia' },
  { country: 'Moldova' },
  { country: 'Greece' },
  { country: 'Azerbaijan' },
  { country: 'Cyprus' },
  { country: 'Hungary' },
  { country: 'United Kingdom' },
  { country: 'Armenia' },
  { country: 'Croatia' },
  { country: 'Estonia' },
  { country: 'Serbia' },
  { country: 'Bulgaria' },
  { country: 'Russia' },
  { country: 'Georgia' }
]

export const generateEuropeAvailableBanknotes = (): AvailableBanknoteExpand[] => 
  europeAvailableBanknotes.map((item) => ({ ...item, continent: Continent.EUROPE }));