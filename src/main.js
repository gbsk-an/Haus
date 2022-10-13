import { createApp, h } from "vue";
import components from '@/components/UI';
import router from './router'
import store from './store'
import App from './App.vue'

//import layouts
import CartLayout from './layouts/cart-layout.vue'
import CatalogLayout from './layouts/catalog-layout.vue'
import AuthorizationLayout from './layouts/authorization-layout.vue'

const app = createApp({
  render: () => h(App)
});
components.forEach(component => {
  app.component(component.name, component)
});

app.use(router);
app.use(store);

app.component('cart-layout', CartLayout)
app.component('catalog-layout', CatalogLayout)
app.component('authorization-layout', AuthorizationLayout)

app.mount("#app");