<template>
  <div class="home">
    <Toolbar icon="mdi-login" :onclickicon="login"/>
    <v-container >
      <v-layout class="container">
        <div class="logo">
          <v-img
            max-height="150"
            max-width="250"
            src="./../assets/logo.png"
            ></v-img>
        </div>
        <div class="welcome">
          <v-card max-width="460" elevation="10">
            <v-card-title class="pa-10">
              Olá, seja bem vindo ao painel de controle dos usuários da Operand !
            </v-card-title>
            <v-card-actions class="pa-3 mb-4 mr-4">
              <v-spacer></v-spacer>
              <v-btn rounded large color="orange">Nosso time</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <v-flex class="pa-5">
          <v-btn class="mr-4" @click="login" block large color="orange">Login | Registro</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import Toolbar from '@/components/Toolbar.vue'

export default {
  name: 'Home',
  components: {
    Toolbar
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .a {
    border: 1px solid red
  }
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
