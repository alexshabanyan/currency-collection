<template>
  <div>
    <div
      class="canvas-container"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
    >
      <canvas class="map" ref="chartRef"></canvas>
    </div>
    <div class="controls">
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
      <button @click="resetView">Сброс</button>
      <span>Zoom: {{ (scale * 100).toFixed(0) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import { Chart, registerables } from 'chart.js';
import { ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from 'chartjs-chart-geo';
import * as topojson from 'topojson-client';
import type { FeatureCollection, Geometry, Feature } from 'geojson';
import { worldGeoJSON } from '../constants/data';
import { defaultMapConfig } from '../modules/map/default-map-config';

Chart.register(...registerables, ChoroplethController, GeoFeature, ProjectionScale, ColorScale);

const chartRef = ref<HTMLCanvasElement | null>(null);
const scale = ref(1);

// Для drag
const state = reactive({
  isDragging: false,
  lastX: 0,
  lastY: 0,
  offsetX: 0,
  offsetY: 0,
});

// ZOOM
const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.1, 3);
  updateTransform();
};

const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.1, 0.5);
  updateTransform();
};

const resetView = () => {
  scale.value = 1;
  state.offsetX = 0;
  state.offsetY = 0;
  updateTransform();
};

// DRAG EVENTS
const startDrag = (e: MouseEvent) => {
  state.isDragging = true;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
};

const onDrag = (e: MouseEvent) => {
  if (!state.isDragging) return;
  const dx = e.clientX - state.lastX;
  const dy = e.clientY - state.lastY;
  state.offsetX += dx;
  state.offsetY += dy;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  updateTransform();
};

const endDrag = () => {
  state.isDragging = false;
};

// APPLY TRANSFORM
const updateTransform = () => {
  if (chartRef.value) {
    chartRef.value.style.transform = `
      translate(${state.offsetX}px, ${state.offsetY}px)
      scale(${scale.value})
    `;
  }
};

const click = (event: any, elements: any) => {
  console.log("🚀 ~ onMounted ~ elements:", elements)
  console.log("🚀 ~ onMounted ~ event:", event)
};

onMounted(async () => {
  if (!chartRef.value || !worldGeoJSON.objects?.countries) return;

  const countries: FeatureCollection<Geometry, { name: string }> = {
    type: "FeatureCollection",
    features: [],
  };

  const rawCountries = topojson.feature(
    worldGeoJSON as any,
    worldGeoJSON.objects.countries
  ) as unknown;

  if (
    rawCountries &&
    typeof rawCountries === "object" &&
    "features" in rawCountries &&
    Array.isArray(rawCountries.features)
  ) {
    countries.features = rawCountries.features.filter(
      (d: Feature<Geometry, { name: string }>) =>
        d.properties.name !== "Antarctica"
    );
  }

  const ctx = chartRef.value.getContext('2d');
  if (!ctx) return;

  const chartInstance = new Chart(ctx, defaultMapConfig({
    countries,
    onClick: click,
  }));

  updateTransform();
});
</script>

<style scoped>
.canvas-container {
  overflow: hidden;
  width: 100%;
  height: 600px;
  position: relative;
  cursor: grab;
}

.canvas-container:active {
  cursor: grabbing;
}

canvas {
  background-color: #A2D5F2 !important; /* Светло-серый фон */
}

.map {
  display: block;
  transform-origin: center center;
  transition: transform 0.1s ease;
  will-change: transform;
}

.controls {
  margin-top: 10px;
}

button {
  margin: 0 5px;
}
</style>
