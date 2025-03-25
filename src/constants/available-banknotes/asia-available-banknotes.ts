import { Continent } from "../../world-geo-data/types";
import { AvailableBanknote, AvailableBanknoteExpand } from "./types";

export const asiaAvailableBanknotes: AvailableBanknote[] = [
  { country: 'China' },
  { country:   'Kazakhstan' },
  { country: 'Uzbekistan' },
  { country: 'Kyrgyzstan'},
  { country:   'Afghanistan' },
  { country: 'Vietnam'},
  { country: 'United Arab Emirates'},
  { country: 'Thailand'},
  { country: 'Malaysia' },
  { country: 'Qatar' },
  { country: 'North Korea' },
  { country: 'Nepal' },
  { country: 'Bangladesh' },
  { country: 'Indonesia' },
  { country: 'Tajikistan' },
  { country: 'Turkmenistan' },
  { country: 'Iran' },
  { country: 'India' },
  { country: 'Laos' },
  { country: 'Cambodia' },
  { country: 'Sri Lanka' },
  { country: 'Pakistan' },
  { country: 'Syria' }
]

export const generateAsiaAvailableBanknotes = (): AvailableBanknoteExpand[] => 
  asiaAvailableBanknotes.map((item) => ({ ...item, continent: Continent.ASIA }));