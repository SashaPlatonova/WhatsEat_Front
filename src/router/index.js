import Vue from 'vue'
import VueRouter from 'vue-router'
import Dish from '../views/Dish'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Start from '../views/Start'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dishes',
    name: 'Dishes',
    component: Dish
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
