import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')