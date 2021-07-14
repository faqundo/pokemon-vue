import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Welcome.vue'
import Search from '../views/Search.vue'
import Loading from '../views/Loading.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Loading.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
