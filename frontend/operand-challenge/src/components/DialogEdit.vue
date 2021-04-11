<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="headline orange--text">Editar Perfil</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  required
                  type="email"
                  :value="user.name"
                  v-model="user.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  type="email"
                  required
                  v-model="user.email"
                  :value="user.email"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
                <v-select
                  :items="['Desenvolvedor Front-end', 'Desenvolvedor Back-end', 'Recursos Humanos', 'Gestor de Projeto']"
                  label="Cargo"
                  required
                  disabled
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="eventClose"
          >
            Fechar
          </v-btn>
          <v-btn
            color="secondary"
            text
            @click="eventCloseEditar"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
  name: 'DialogEdit',
  props: {
    dialog: Boolean
  },
  data () {
    return {
      dialogOpenClose: false,
      user: {}
    }
  },
  created () {
    this.dialogOpenClose = this.dialog
    this.user = {
      ...this.$store.state.user
    }
  },
  methods: {
    eventClose () {
      this.dialogOpenClose = false
      this.$emit('closeDialog')
    },
    eventCloseEditar () {
      axios.put(`${baseApiUrl}/user`, this.user).then(response => {
        axios.get(`${baseApiUrl}/user/email/${this.user.email}`).then(response => {
          if (response.data.user) {
            this.$store.commit('setUser', response.data.user)
            this.dialogOpenClose = false
            this.$emit('closeDialogAndRefreshUser')
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
      this.dialogOpenClose = false
      this.$emit('closeDialog')
    }
  }
}
</script>

<style>

</style>
