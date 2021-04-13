<template>
  <div>
    <Toolbar/>
      <div class="center">
        <FormLogin @changeLoginRegister="isLogin = false" v-if="isLogin"/>
        <FormRegister @changeLoginRegister="isLogin = true" v-else/>
      </div>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue'
import FormLogin from '../components/FormLogin.vue'
import FormRegister from '../components/FormRegister.vue'

export default {
  components: { Toolbar, FormLogin, FormRegister },
  name: 'Login',
  data () {
    return {
      isLogin: true,
      isLoadingLogin: false,
      isLoadingRegister: false
    }
  }
}
</script>

<style scoped>
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh
  }
</style>
