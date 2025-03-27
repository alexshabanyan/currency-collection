import { Continent } from "../../../types/continents/types";
import { AvailableBanknote, AvailableBanknoteExpand } from "../types";

const africaAvailableBanknotes: AvailableBanknote[] = [
  { country: 'Congo' },
  { country: 'Burundi' },
  { country: 'Egypt' },
  { country: 'Nigeria' },
  { country: 'Lebanon' },
  { country: 'Zambia' },
  { country: 'Madagascar' },
  { country: 'Libya' },
  { country: 'South Africa' }
];

export const generateAfricaAvailableBanknotes = (): AvailableBanknoteExpand[] => 
  africaAvailableBanknotes.map((item) => ({ ...item, continent: Continent.AFRICA }));
