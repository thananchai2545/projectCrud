import { createApp } from 'vue'
//css
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store/'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')


