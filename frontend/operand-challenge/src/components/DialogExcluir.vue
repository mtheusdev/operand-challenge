<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="440"
    >
      <v-card>
        <v-card-title class="headline">
          Tem certeza que deseja excluir sua conta?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="eventClose"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="error"
            text
            @click="excluirUser"
          >
            Sim, quero excluir!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  </v-row>
</template>

<script>

import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
  name: 'DialogExcluir',
  props: {
    dialog: Boolean
  },
  data () {
    return {
      dialogOpenClose: false,
      user: {},
      error_text: '',
      snackbar: false
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
      this.$emit('closeDialogDelete')
    },
    excluirUser () {
      if (!this.user.id) {
        this.error_text = 'Usuário não encontrado!'
        this.snackbar = true
        this.$emit('closeDialogDelete')
      } else {
        axios.delete(`${baseApiUrl}/user/${this.user.id}`).then(() => {
          this.$store.commit('setUser', null)
          this.dialogOpenClose = false
          this.$emit('closeDialogDelete')
          this.$router.push('/')
        }).catch(errors => {
          this.error_text = 'Ocorreu um erro ao tentar excluir: ' + errors
          this.snackbar = true
          this.dialogOpenClose = false
          this.$emit('closeDialogDelete')
        })
      }
    }
  }
}
</script>

<style>

</style>
