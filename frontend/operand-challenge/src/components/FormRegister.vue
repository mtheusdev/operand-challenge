<template>
<div class="animate__animated animate__flipInX">
  <v-container fill-height align-center justify-center>
    <v-card min-width="700">
      <v-card-title class="blue--text" primary-title>Registro
        <v-progress-circular class="ml-4" v-show="isLoadingRegister" indeterminate color="blue" width="1"></v-progress-circular>
          <v-spacer></v-spacer>
        <v-btn @click="toLogin" outlined color="orange">
          Já possuo uma conta
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field color="secondary" prepend-icon="mdi-account" name="name"
          label="Nome" :error-messages="nameErrors" v-model.trim="$v.user.name.$model" type="text"></v-text-field>
          <v-text-field color="secondary" prepend-icon="mdi-email" name="email"
          label="Email" :error-messages="emailErrors" v-model.trim="$v.user.email.$model" type="email" ></v-text-field>
          <v-text-field color="secondary" prepend-icon="mdi-lock" name="password"
          label="Senha" :error-messages="passwordErrors" v-model.trim="$v.user.password.$model" type="password" @keypress.enter="submit"></v-text-field>
          <v-text-field v-model.trim="$v.user.confirmPassword.$model" color="secondary" prepend-icon="mdi-lock-outline" name="password"
          label="Confirme sua Senha" :error-messages="passwordErrors2" type="password" @keypress.enter="submit('register')"></v-text-field>
        </v-form>
        <v-btn :disabled="$v.$invalid" @click="submit('register')" rounded class="mt-5" color="secondary" block depressed>Faça parte!</v-btn>
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
export default {
  name: 'FormLogin',
  data () {
    return {
      snackbar: false,
      isLoadingRegister: false,
      error_text: '',
      isLogin: false,
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
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
    },
    passwordErrors2 () {
      const errors = []
      const password = this.$v.user.confirmPassword
      if (!password.$dirty) { return errors }
      !password.required && errors.push('Senha é obrigatória!')
      !password.minLength && errors.push(`Insira pelo menos ${password.$params.minLength.min} caracteres!`)
      return errors
    },
    nameErrors () {
      const errors = []
      const name = this.$v.user.name
      if (!name.$dirty) { return errors }
      !name.required && errors.push('Nome é obrigatório!')
      !name.minLength && errors.push(`Insira pelo menos ${name.$params.minLength.min} caracteres!`)
      return errors
    }
  },
  methods: {
    toLogin () {
      this.$emit('changeLoginRegister')
    },
    submit () {
      this.isLoadingRegister = true
      setTimeout(() => {
        if (this.user.password !== this.user.confirmPassword) {
          this.error_text = 'Senhas não coincidem!'
          this.snackbar = true
        } else {
          axios.post(`${baseApiUrl}/user`, this.user).then(() => {
            axios.get(`${baseApiUrl}/user/email/${this.user.email}`).then(response => {
              if (response.data.user) {
                this.$store.commit('setUser', response.data.user)
                localStorage.setItem(userId, JSON.stringify(response.data.user.id))
                this.isLoadingRegister = false
                this.$router.push('/perfil').catch(() => {})
              } else {
                this.error_text = 'Usuário não encontrado!'
                this.snackbar = true
              }
            }).catch(errors => {
              this.error_text = 'Ocorreu um erro: ' + errors
              this.snackbar = true
            })
          }).catch(errors => {
            this.error_text = 'Ocorreu um erro: ' + errors
            this.snackbar = true
          })
        }
        this.isLoadingRegister = false
      }, 1500)
    }
  }
}
</script>

<style>

</style>
