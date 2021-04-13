<template>
<div class="global">
    <Toolbar/>
    <v-container >
      <v-layout class="container">
        <MainLogo />
        <div class="welcome">
          <v-list rounded three-line>
            <template v-for="(user, index) in users">
              <v-divider
                v-if="index"
                :key="index"
                :inset="index < users.length"
              ></v-divider>
              <v-list-item
                :key="user.id"
              >
                <UserOperand :avatar="randonAvatar(3,1)" :userEmail="user.email" :userName="user.name"/>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import Toolbar from '../components/Toolbar.vue'
import MainLogo from '../components/MainLogo.vue'
import UserOperand from './../components/UserOperand'
export default {
  data () {
    return {
      users: [],
      avatares: ['https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg', 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg', 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14049.jpg']
    }
  },
  components: {
    Toolbar,
    UserOperand,
    MainLogo
  },
  name: 'OurTeam',
  methods: {
    randonAvatar (max, min) {
      max = 3
      min = 0
      const valor = Math.random() * (max - min) + min
      const indexarray = Math.floor(valor)
      return this.avatares[indexarray]
    }
  },
  created () {
    axios.get(`${baseApiUrl}/user`).then(response => {
      this.users = [...response.data.result]
    }).catch(errors => {
      this.error_text = 'Ocorreu um erro: ' + errors
      this.snackbar = true
    })
  }
}
</script>

<style>
/* .a {
    border: 1px solid red
  } */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .welcome {
    padding: 20px;
    display: flex;
  }
  .global {
    font-family: Poppins;
  }
</style>
