import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import i18n from './i18n'

import 'element-plus/dist/index.css'
import './assets/style/global.css'

const app = createApp(App)
app.use(createPinia()).use(router).use(ElementPlus).use(i18n).mount('#app')
