import './assets/main.css'
import 'uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naiveUI from 'naive-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naiveUI)

app.mount('#app')
