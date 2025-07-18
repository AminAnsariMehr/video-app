import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/css/style.css'
import vuetify from './plugins/vuetify'
import router from './router/index.js'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
