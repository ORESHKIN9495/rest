import { createApp } from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'

createApp(app).use(router).use(store).mount('#app')
