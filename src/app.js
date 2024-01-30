import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const mountEl = document.querySelector("#app")
const app = createApp(App, {...mountEl.dataset })

app.config.globalProperties.apiUrl = 'https://projects.sbw.media'

app.use(createPinia())
app.use(router)

app.mount('#app')
