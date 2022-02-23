import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import BaseProduct from "./components/layout/BaseProduct.vue"
import BaseButton from "./components/layout/BaseButton.vue"
const app = createApp(App)
app.component('BaseProduct', BaseProduct)
app.component('BaseButton', BaseButton)
app.use(store)
app.use(router)
app.mount('#app')
