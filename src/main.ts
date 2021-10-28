import { createApp } from 'vue'
import App from './App.vue'
import X from './components/Home.vue'
import X2 from './components/About.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
const router = createRouter({
  history,
  routes:[
    {path: '/', component: X},
    {path: '/about', component: X2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
