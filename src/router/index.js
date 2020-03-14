import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/city',
    name:'city',
    component:()=>import('@/components/City/City')
  },
  {
    path:'/details',
    component:()=>import('@/components/Details/Details')
  },
  {
    path:'/log',
    component:()=>import('@/components/Log/Log')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
