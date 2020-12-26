import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import '../src/style/global.scss'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')