import './bootstrap';
import {createApp} from 'vue'

import App from './App.vue'

const appName = import.meta.env.VITE_APP_NAME;
alert(appName);
createApp(App).mount("#app")
