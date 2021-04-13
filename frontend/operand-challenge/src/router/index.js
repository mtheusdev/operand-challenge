import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import Perfil from './../views/Perfil.vue'
import OurTeam from './../views/OurTeam.vue'
import { userId } from '@/global'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/ourteam',
    name: 'OurTeam',
    component: OurTeam
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userId)
  const user = JSON.parse(json)
  if (to.name === 'Home') {
    next()
  } else if (to.name !== 'Login' && !user) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
