import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { createVfm } from 'vue-final-modal';
import router from './Router/router';
import { createPinia } from 'pinia';
const app = createApp(App);
const pinia = createPinia();
app.use(pinia); 
app.use(router);
app.use(createVfm());
app.mount('#app');
