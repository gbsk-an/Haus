import { createApp, h } from "vue";
import components from '@/components/UI';
import router from './router'
import store from './store'
import App from './App.vue'
import CartLayout from './layouts/cart-layout.vue'
import DefaultLayout from './layouts/default-layout.vue'
import CatalogLayout from './layouts/catalog-layout.vue'

const app = createApp({
  render: () => h(App)
});

app.use(router);
app.use(store);
app.use(components);

app.component('cart-layout', CartLayout)
app.component('default-layout', DefaultLayout)
app.component('catalog-layout', CatalogLayout)

app.mount("#app");