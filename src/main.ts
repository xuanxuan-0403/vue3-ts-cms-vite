import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/css/base.css';
import './tailwind.css';
import 'uno.css';

import App from './App.vue';
import router from './router';
import { globalRegister } from './global';

const pinia = createPinia();
const app = createApp(App);

globalRegister(app);
app.use(router);
app.use(pinia);

app.mount('#app');
