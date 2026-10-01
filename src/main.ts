import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './assets/css/index.scss'

const app = createApp(App)

app.use(ElementPlus).use(router).mount('#app')
