<template>
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
        @click="emitSnackBar"
      >
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    error_text: String
  },
  data () {
    return {
      snackbar: true
    }
  },
  methods: {
    emitSnackBar () {
      this.snackbar = false
      this.$emit('closeSnack')
    }
  }
}
</script>

<style>

</style>
