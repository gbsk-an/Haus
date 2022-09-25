import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI';
import 'normalize.css/normalize.css';


const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component)
});
createApp(App).mount('#app')