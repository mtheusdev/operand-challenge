import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Login from './../views/Login.vue'
import Perfil from './../views/Perfil.vue'
import OurTeam from './../views/OurTeam.vue'
// import Home from './../views/Home.vue'
// import Home from './../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    exact: true
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
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
