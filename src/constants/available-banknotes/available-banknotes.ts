

import { generateAfricaAvailableBanknotes } from "./africa-available-banknotes";
import { generateAsiaAvailableBanknotes } from "./asia-available-banknotes";
import { generateAustraliaAvailableBanknotes } from "./australia-available-banknotes";
import { generateEuropeAvailableBanknotes } from "./europe-available-banknotes";
import { northAmericaEuropeAvailableBanknotes } from "./north-america-available-banknotes";
import { southAmericaEuropeAvailableBanknotes } from "./south-america-available-banknotes";

export const availableBanknotesList = () => ([
  ...generateAfricaAvailableBanknotes(),
  ...generateAsiaAvailableBanknotes(),
  ...generateAustraliaAvailableBanknotes(),
  ...generateEuropeAvailableBanknotes(),
  ...northAmericaEuropeAvailableBanknotes(),
  ...southAmericaEuropeAvailableBanknotes(),
])