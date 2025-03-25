import { onMounted, ref, reactive } from 'vue';
import { Chart, registerables } from 'chart.js';
import { ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from 'chartjs-chart-geo';
import * as topojson from 'topojson-client';
import { worldGeoJSON } from '../constants/data';
import { defaultMapConfig } from '../modules/map/default-map-config';
Chart.register(...registerables, ChoroplethController, GeoFeature, ProjectionScale, ColorScale);
const chartRef = ref(null);
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
const startDrag = (e) => {
    state.isDragging = true;
    state.lastX = e.clientX;
    state.lastY = e.clientY;
};
const onDrag = (e) => {
    if (!state.isDragging)
        return;
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
const click = (event, elements) => {
    console.log("🚀 ~ onMounted ~ elements:", elements);
    console.log("🚀 ~ onMounted ~ event:", event);
};
onMounted(async () => {
    if (!chartRef.value || !worldGeoJSON.objects?.countries)
        return;
    const countries = {
        type: "FeatureCollection",
        features: [],
    };
    const rawCountries = topojson.feature(worldGeoJSON, worldGeoJSON.objects.countries);
    if (rawCountries &&
        typeof rawCountries === "object" &&
        "features" in rawCountries &&
        Array.isArray(rawCountries.features)) {
        countries.features = rawCountries.features.filter((d) => d.properties.name !== "Antarctica");
    }
    const ctx = chartRef.value.getContext('2d');
    if (!ctx)
        return;
    const chartInstance = new Chart(ctx, defaultMapConfig({
        countries,
        onClick: click,
    }));
    updateTransform();
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['canvas-container',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onMousedown: (__VLS_ctx.startDrag) },
        ...{ onMousemove: (__VLS_ctx.onDrag) },
        ...{ onMouseup: (__VLS_ctx.endDrag) },
        ...{ onMouseleave: (__VLS_ctx.endDrag) },
        ...{ class: ("canvas-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
        ...{ class: ("map") },
        ref: ("chartRef"),
    });
    // @ts-ignore navigation for `const chartRef = ref()`
    /** @type { typeof __VLS_ctx.chartRef } */ ;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("controls") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.zoomIn) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.zoomOut) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.resetView) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    ((__VLS_ctx.scale * 100).toFixed(0));
    ['canvas-container', 'map', 'controls',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'chartRef': __VLS_nativeElements['canvas'],
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            chartRef: chartRef,
            scale: scale,
            zoomIn: zoomIn,
            zoomOut: zoomOut,
            resetView: resetView,
            startDrag: startDrag,
            onDrag: onDrag,
            endDrag: endDrag,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
