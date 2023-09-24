import './assets/reset.scss'
import './assets/root.scss'
import './assets/main.scss'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
