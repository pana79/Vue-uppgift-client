import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productShow from '../views/productShow.vue'
import productList from '../views/productList.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/product/:id",
    name: "product-show",
    component: productShow,
    props: true,
  
  },
  {
    path: '/products',
    name: 'product-List',
    component: productList,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/products.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
