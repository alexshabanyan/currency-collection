

import { generateAfricaAvailableBanknotes } from "./continents/africa-available-banknotes";
import { generateAsiaAvailableBanknotes } from "./continents/asia-available-banknotes";
import { generateAustraliaAvailableBanknotes } from "./continents/australia-available-banknotes";
import { generateEuropeAvailableBanknotes } from "./continents/europe-available-banknotes";
import { northAmericaEuropeAvailableBanknotes } from "./continents/north-america-available-banknotes";
import { southAmericaEuropeAvailableBanknotes } from "./continents/south-america-available-banknotes";
import { AvailableBanknoteExpand } from "./types";

export const availableBanknotesList = (): AvailableBanknoteExpand[] => ([
  ...generateAfricaAvailableBanknotes(),
  ...generateAsiaAvailableBanknotes(),
  ...generateAustraliaAvailableBanknotes(),
  ...generateEuropeAvailableBanknotes(),
  ...northAmericaEuropeAvailableBanknotes(),
  ...southAmericaEuropeAvailableBanknotes(),
])