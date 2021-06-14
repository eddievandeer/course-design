import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import Common from './components/common'
import 'font-awesome/css/font-awesome.min.css'
import '../src/style/global.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Common)
app.mount('#app')