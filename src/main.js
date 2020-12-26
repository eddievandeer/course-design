import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import '../src/style/global.scss'
import AppDialog from './components/common/AppDialog.vue'
import Loading from './components/common/Loading.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.component('app-dialog', AppDialog)
app.component('loading', Loading)