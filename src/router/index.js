import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'goods',
        component: () => import('../views/Goods.vue')
      },
      {
        path: 'infomation/:id',
        component: () => import('../views/GoodsInfomation.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: 'completeorder',
        component: () => import('../views/CompleteOrder.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/Favorite.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
