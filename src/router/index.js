import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
const routes = [
    { path: '/', component: MainPage },
];
const router = createRouter({
    history: createWebHistory('/currency-collection/'), // <- важный момент
    routes,
});
export default router;
