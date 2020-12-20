import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import 'font-awesome/css/font-awesome.min.css'

createApp(App)
    .use(router)
    .mount('#app')