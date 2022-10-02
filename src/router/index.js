import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home.vue'),
    meta: {
      layouts: 'DefaultLayout'
    }
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/components/catalog.vue'),
    meta: {
      layouts: 'CatalogLayout'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/cart.vue'),
    props: true,
    meta: {
      layouts: 'CartLayout'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
