import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Antd);
app.use(router)
app.mount('#app')
