<template>
  <div>
    <Toolbar icon="mdi-home" :onclickicon="goToHome"/>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue'
export default {
  components: {
    Toolbar
  },
  name: 'OurTeam',
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
