import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import "./css/main.css"
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
// app.use(store);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});
app.mount('#app');