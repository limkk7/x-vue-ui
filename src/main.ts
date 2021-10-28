import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import './index.scss'


const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
      {path: 'switch', component: SwitchDemo}
    ]}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
