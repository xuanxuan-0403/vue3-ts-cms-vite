import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/css/base.css';
import './tailwind.css';
import 'uno.css';

import App from './App.vue';
import router from './router';
import { globalRegister } from './global';

const pinia = createPinia();
import { setupStore } from './store';
const app = createApp(App);

globalRegister(app);
app.use(pinia);
setupStore();
app.use(router);

app.mount('#app');
