<template>
  <div>
    <Toolbar icon="mdi-home" :onclickicon="goToHome"/>
      <div class="center">
      <v-container v-if="isLogin" fill-height align-center justify-center>
          <v-card min-width="400">
            <v-card-title class="orange--text" primary-title>Bem vindo de volta
              <v-spacer></v-spacer>
              <v-btn color="success" outlined @click="isLogin = false">
                Registrar
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="mdi-email" name="email"
                label="Email" v-model="user.email" type="email" ></v-text-field>
                <v-text-field prepend-icon="mdi-lock" name="password"
                label="Senha" v-model="user.password" type="password" @keypress.enter="submit('login')"></v-text-field>
              </v-form>
              <v-btn @click="submit('login')" rounded class="mt-5" color="accent" block depressed>Vamos lá!</v-btn>
            </v-card-text>
          </v-card>
    </v-container>
    <v-container v-else fill-height align-center justify-center>
          <v-card min-width="400">
            <v-card-title class="blue--text" primary-title>Registro
               <v-spacer></v-spacer>
              <v-btn @click="isLogin = true" outlined color="orange">
                Já possuo uma conta
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field color="secondary" prepend-icon="mdi-account" name="name"
                label="Nome" v-model="user.name" type="text"></v-text-field>
                <v-text-field color="secondary" prepend-icon="mdi-email" name="email"
                label="Email" v-model="user.email" type="email" ></v-text-field>
                <v-text-field color="secondary" prepend-icon="mdi-lock" name="password"
                label="Senha" v-model="user.password" type="password" @keypress.enter="submit"></v-text-field>
                <v-text-field v-model="user.confirmPassword" color="secondary" prepend-icon="mdi-lock-outline" name="password"
                label="Confirme sua Senha"  type="password" @keypress.enter="submit('register')"></v-text-field>
              </v-form>
              <v-btn @click="submit('register')" rounded class="mt-5" color="secondary" block depressed>Faça parte!</v-btn>
            </v-card-text>
          </v-card>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      top
    >
      {{ error_text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    </div>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue'
import axios from 'axios'
import { baseApiUrl } from '@/global'
export default {
  components: { Toolbar },
  name: 'Login',
  data () {
    return {
      isLogin: false,
      snackbar: false,
      error_text: '',
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    submit (value) {
      if (value === 'login') {
        axios.post(`${baseApiUrl}/login`, this.user).then(response => {
          if (response.data.status) {
            this.$store.commit('setUser', this.user)
            this.$router.push('/perfil')
          } else {
            this.error_text = 'Credenciais incorretas! Tente novamente'
            this.snackbar = true
          }
        }).catch(errors => {
          this.error_text = 'Ocorreu um erro: ' + errors
          this.snackbar = true
        })
      } else {
        if (this.user.password !== this.user.confirmPassword) {
          this.error_text = 'Senhas não coincidem!'
          this.snackbar = true
        } else {
          axios.post(`${baseApiUrl}/user`, this.user).then(() => {
            this.$store.commit('setUser', this.user)
            this.$router.push('/perfil')
          }).catch(errors => {
            this.error_text = 'Ocorreu um erro: ' + errors
            this.snackbar = true
          })
        }
      }
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
