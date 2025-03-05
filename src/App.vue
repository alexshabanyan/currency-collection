<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
import { ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from 'chartjs-chart-geo';
import * as topojson from 'topojson-client';
import type { FeatureCollection, Geometry, Feature } from 'geojson';
import { availableBanknotes } from './constants/countries';
import { worldGeoJSON } from './constants/data';

Chart.register(...registerables, ChoroplethController, GeoFeature, ProjectionScale, ColorScale);

const chartRef = ref<HTMLCanvasElement | null>(null);

onMounted(async () => {
  if (!chartRef.value || !worldGeoJSON.objects?.countries) return;

  const countries: FeatureCollection<Geometry, { name: string }> = {
  type: "FeatureCollection",
  features: [], // Временное пустое значение, позже заполним
};

// Создаём объект GeoJSON
const rawCountries = topojson.feature(
  worldGeoJSON as any,
  worldGeoJSON.objects.countries
) as unknown; // Приводим к unknown, чтобы избежать жестких проверок TypeScript

// Проверяем, является ли rawCountries FeatureCollection
if (
  rawCountries &&
  typeof rawCountries === "object" &&
  "features" in rawCountries &&
  Array.isArray(rawCountries.features)
) {
  countries.features = rawCountries.features.filter(
    (d: Feature<Geometry, { name: string }>) =>
      d.properties.name !== "Antarctica" // ❌ Исключаем Антарктику
  );
}




  const ctx = chartRef.value.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'choropleth',
    data: {
      labels: countries.features.map((d) => d.properties.name),
      datasets: [{
        label: 'World Map',
        data: countries.features.map((d) => ({
          feature: d,
          value: availableBanknotes.includes(d.properties.name) ? 100 : 0, // ⬅️ 100 для России, 0 для остальных
        })),
        borderColor: countries.features.map((d) => 
      availableBanknotes.includes(d.properties.name) ? 'white' : 'transparent' // ⬅️ Белая граница для выбранных стран
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
        legend: { display: false }, // ⬅️ Отключаем легенду
      },
      onClick: (event, elements) => {
        console.log("🚀 ~ onMounted ~ elements:", elements)
        console.log("🚀 ~ onMounted ~ event:", event)
        
      },
    },
  });


});

</script>

<template>
  <canvas class="map" ref="chartRef"></canvas>
</template>

<style scoped>
canvas {
  background-color: #ADD8E6 !important; /* Светло-серый фон */
}

.map {
  display: block;
  width: 100vw !important;
  height: 100vh !important;
}
</style>
