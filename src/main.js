import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI';
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(components).mount('#app')
