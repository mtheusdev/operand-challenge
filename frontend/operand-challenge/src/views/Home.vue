<template>
  <div class="home">
    <Toolbar/>
    <v-container >
      <v-layout class="container">
        <MainLogo/>
        <div class="welcome">
          <v-card max-width="510" elevation="10">
            <v-card-title class="pa-10">
              Olá, seja bem vindo ao painel de controle dos usuários da Operand !
            </v-card-title>
            <v-card-actions class="pa-3 mb-4 mr-4">
              <v-spacer></v-spacer>
              <v-btn @click="goToListUsers" outlined rounded large color="orange">Nosso time</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <v-flex class="pa-5">
          <v-btn class="mr-4" @click="login" block large color="orange">Meu Perfil</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import Toolbar from '@/components/Toolbar.vue'
import MainLogo from '../components/MainLogo.vue'
export default {
  name: 'Home',
  components: {
    Toolbar,
    MainLogo
  },
  methods: {
    login () {
      this.$router.push('/Perfil').catch(() => {})
    },
    goToListUsers () {
      this.$router.push('/ourteam').catch(() => {})
    }
  }
}
</script>

<style scoped>
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
</style>
