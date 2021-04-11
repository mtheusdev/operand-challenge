<template>
  <v-app class="global" dark>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style>
  .global {
    font-family: Poppins;
  }
</style>
