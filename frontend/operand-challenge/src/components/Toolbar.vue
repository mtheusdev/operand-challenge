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
      <v-btn icon>
        <v-icon @click="onclickicon" color="primary">{{icon}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon @click="goToPerfil" color="secondary">mdi-account</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    icon: String,
    onclickicon: Function
  },
  methods: {
    goToHome () {
      this.$router.push('/').catch(() => {})
    },
    goToPerfil () {
      this.$router.push('/perfil').catch(() => {})
    }
  }
}
</script>

<style>

</style>
