<template>
  <div>
    <Toolbar icon="mdi-home" :onclickicon="goToHome"/>
    <v-container >
      <v-layout class="container">
        <div class="logo">
          <v-img
            max-height="150"
            max-width="250"
            src="./../assets/logo.png"
            ></v-img>
        </div>
        <div class="welcome">
          <v-card
    class="mx-auto"
    color="accent"
    dark
    max-width="600"
  >
    <v-card-title>
      <span class="title font-weight-light">{{user.name}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-light">
      Olá, {{user.name}}! Este é o seu perfil. Aqui você pode gerenciar sua conta editando seus dados ou excluindo seus registros.
      Você também pode dar uma olhadinha na lista de usuarios existentes na Operand!
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.email }}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            @click="dialogEditar = true"
            large
            icon
            class="mr-2"
            v-bind="attrs"
            v-on="on"
            >
              <v-icon class="mr-1">
                mdi-pencil
              </v-icon>
            </v-btn>
          </template>
          <span>Editar</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" @click="dialogExcluir = true"  large icon class="mr-2">
              <v-icon color="error2" class="mr-1">
                mdi-account-remove
              </v-icon>
            </v-btn>
          </template>
          <span>Excluir</span>
        </v-tooltip>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
        </div>
        <v-flex class="pa-5">
          <v-btn @click="goToListUsers" class="mr-4" block large color="deep">Usuários Operand</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
      <DialogEdit @closeDialog="dialogEditar=false" :dialog="dialogEditar"/>
      <DialogExcluir @closeDialogDelete="dialogExcluir=false" :dialog="dialogExcluir"/>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue'
import DialogEdit from '../components/DialogEdit.vue'
import DialogExcluir from '../components/DialogExcluir.vue'
// import { mapState } from 'vuex'
export default {
  components: {
    Toolbar,
    DialogEdit,
    DialogExcluir
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    goToListUsers () {
      this.$router.push('/ourteam')
    }
  },
  name: 'Perfil',
  // computed: mapState(['user'])
  data () {
    return {
      user: {},
      dialogExcluir: false,
      dialogEditar: false
    }
  },
  created () {
    this.user = {
      ...this.$store.state.user
    }
  }
}
</script>

<style scoped>
.a {
    border: 1px solid red
  }
 .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .welcome {
    padding: 20px;
    display: flex;
  }
</style>
