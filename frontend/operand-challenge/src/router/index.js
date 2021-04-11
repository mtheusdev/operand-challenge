import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import Perfil from './../views/Perfil.vue'
import OurTeam from './../views/OurTeam.vue'

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

export default router
