import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home.vue'),
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
  {
    path: '/authorization',
    name: 'authorization',
    component: () => import('@/components/authorization.vue'),
    props: true,
    meta: {
      layouts: 'AuthorizationLayout'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/register.vue'),
    props: true,
    meta: {
      // layouts: 'AuthorizationLayout'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/components/forgot-password.vue'),
    props: true,
    meta: {
      // layouts: 'AuthorizationLayout'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
