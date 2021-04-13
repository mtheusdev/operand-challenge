<template>
  <v-toolbar fixed dense>
    <v-toolbar-title>
      <v-btn @click="goToHome" text>
        <v-img
          src="../assets/logo.png"
          max-height="100"
          max-width="100"
         ></v-img>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="isLogged" icon>
        <v-icon @click="goToLogin" color="primary">mdi-logout</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon @click="goToPerfil" color="secondary">mdi-account</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { userId } from '@/global'
export default {
  name: 'Header',
  data () {
    return {
      isLogged: false
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/').catch(() => {})
    },
    goToPerfil () {
      this.$router.push('/perfil').catch(() => {})
    },
    async goToLogin () {
      await localStorage.removeItem(userId)
      await this.$store.commit('setUser', null)
      this.isLogged = false
      this.$router.push('/Login').catch(() => {})
    }
  },
  async created () {
    const json = localStorage.getItem(userId)
    const user = JSON.parse(json)
    await user ? this.isLogged = true : this.isLogged = false
  }
}
</script>

<style>

</style>
