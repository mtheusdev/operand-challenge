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
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Senha"
                  type="password"
                  required
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
            color="primary"
            text
            @click="eventClose"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogEdit',
  props: {
    dialog: Boolean
  },
  data () {
    return {
      dialogOpenClose: false
    }
  },
  created () {
    this.dialogOpenClose = this.dialog
  },
  methods: {
    eventClose () {
      this.dialogOpenClose = false
      this.$emit('closeDialog')
    }
  }
}
</script>

<style>

</style>
