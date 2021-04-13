<template>
<div class="animate__animated animate__zoomIn">
  <v-container v-if="isLogin" fill-height align-center justify-center>
    <v-card min-width="600">
      <v-card-title class="orange--text" primary-title>Bem vindo de volta
        <v-progress-circular class="ml-4" v-show="isLoadingLogin" indeterminate color="orange" width="1"></v-progress-circular>
        <v-spacer></v-spacer>
        <v-btn color="success" outlined @click="toRegister">
          Registrar
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="mdi-email" name="email"
          label="Email" :error-messages="emailErrors" v-model.trim="$v.user.email.$model" type="email" ></v-text-field>
          <v-text-field prepend-icon="mdi-lock" name="password"
          label="Senha" v-model.trim="$v.user.password.$model" :error-messages="passwordErrors" type="password" @keypress.enter="submit"></v-text-field>
        </v-form>
        <v-btn :disabled="$v.$invalid" @click="submit" rounded class="mt-5" color="accent" block depressed>Vamos lá!</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
  <!-- <SnackBar v-if="snackbar" @closeSnack="snackBar=true" :error_text="error_text"/> -->
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
        @click="snackbar=false"
      >
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import axios from 'axios'
import { baseApiUrl, userId } from '@/global'
// import SnackBar from '../components/SnackBar.vue'
export default {
  name: 'FormLogin',
  // components: {
  //   SnackBar
  // },
  data () {
    return {
      isLogin: true,
      snackbar: false,
      isLoadingLogin: false,
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
    toRegister () {
      this.$emit('changeLoginRegister')
    },
    submit () {
      this.isLoadingLogin = true
      setTimeout(() => {
        axios.post(`${baseApiUrl}/login`, this.user).then(response => {
          if (response.data.status) {
            axios.get(`${baseApiUrl}/user/email/${this.user.email}`).then(response => {
              if (response.data.user) {
                this.$store.commit('setUser', response.data.user)
                localStorage.setItem(userId, JSON.stringify(response.data.user.id))
                this.isLoadingLogin = false
                this.$router.push('/perfil').catch(() => {})
              } else {
                this.error_text = 'Usuário não encontrado!'
                this.snackbar = true
              }
            }).catch(errors => {
              this.error_text = 'Ocorreu um erro: ' + errors
              this.snackbar = true
            })
          } else {
            this.error_text = 'Credenciais incorretas! Tente novamente'
            this.snackbar = true
          }
        }).catch(errors => {
          this.error_text = 'Ocorreu um erro: ' + errors
          this.snackbar = true
        })
        this.isLoadingLogin = false
      }, 1500)
    }
  },
  validations () {
    const validationsLogin = {
      user: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    }
    if (this.isLogin) { return validationsLogin }
    return {
      user: {
        ...validationsLogin.user,
        name: {
          required,
          minLength: minLength(3)
        },
        confirmPassword: {
          required,
          minLength: minLength(6)
        }
      }
    }
  },
  computed: {
    passwordErrors () {
      const errors = []
      const password = this.$v.user.password
      if (!password.$dirty) { return errors }
      !password.required && errors.push('Senha é obrigatória!')
      !password.minLength && errors.push(`Insira pelo menos ${password.$params.minLength.min} caracteres!`)
      return errors
    },
    emailErrors () {
      const errors = []
      const email = this.$v.user.email
      if (!email.$dirty) { return errors }
      !email.required && errors.push('Campo email é obrigatório!')
      !email.email && errors.push('Insira um email válido!')
      return errors
    }
  }
}
</script>

<style>

</style>
