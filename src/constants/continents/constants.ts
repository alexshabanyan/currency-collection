import { Continent, ContinentInfo } from "../../types/continents/types"

export const continentValues = {
  [Continent.AFRICA]: 'Африка',
  [Continent.ANTARCTICA]: 'Антарктика',
  [Continent.ASIA]: 'Азия',
  [Continent.AUSTRALIA]: 'Австралия',
  [Continent.EUROPE]: 'Европа',
  [Continent.NORTH_AMERICA]: 'Северная Америка',
  [Continent.SOUTH_AMERICA]: 'Южная Америка',
}

export const continentsInfo = (): ContinentInfo[] => {
  return Object
    .values(Continent)
    .map((continent) => ({
      continent,
      name: continentValues[continent]
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}