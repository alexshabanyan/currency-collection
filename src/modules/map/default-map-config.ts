import type { FeatureCollection, Geometry, Feature } from 'geojson';
import type { ActiveElement, Chart, ChartConfiguration, ChartConfigurationCustomTypesPerDataset, ChartEvent, ChartType, ChartTypeRegistry } from 'chart.js';
import { availableBanknotes, availableBanknotesList } from '../../constants/available-banknotes/available-banknotes';

export interface DefaultMapConfig {
  countries: FeatureCollection<Geometry, {
    name: string;
  }>,
  onClick?: (event: ChartEvent, elements: ActiveElement[], chart: Chart) => void
}

export const defaultMapConfig = (data: DefaultMapConfig): ChartConfiguration | ChartConfigurationCustomTypesPerDataset => {
  const { countries, onClick } = data;
  const availableBanknotesListTest = availableBanknotesList().map(item => item.country);

  return {
    type: 'choropleth',
    data: {
      labels: countries.features.map((d) => d.properties.name),
      datasets: [{
        label: 'World Map',
        data: countries.features
          .map((d) => ({
            feature: d,
            value: availableBanknotesListTest.includes(d.properties.name) ? 100 : 0, // ⬅️ 100 для России, 0 для остальных
          })),
        borderColor: countries.features.map((d) => '#bcbcbc'
          // availableBanknotes.includes(d.properties.name) ? 'red' : 'transparent' // ⬅️ Белая граница для выбранных стран
    ),
    borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        projection: {
          axis: 'x',
          projection: 'equalEarth',
        },
        color: {
          axis: 'x',
          quantize: 2, // ⬅️ Минимум 2 градации: 0 (белый), 100 (цвет)
          min: 0, // ⬅️ Минимальный цвет для белого фона
          max: 100, // ⬅️ Максимальный цвет (Россия)
          missing: 'rgba(255, 255, 255, 1)', // ⬅️ Белый цвет для стран без данных
        },
      },
      plugins: {
        legend: { display: false },
      },
      onClick: (event, elements) => {
        console.log("🚀 ~ onMounted ~ elements:", elements)
        console.log("🚀 ~ onMounted ~ event:", event)
        
      },
    },
  }
}
