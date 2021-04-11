<template>
  <div class="containerRow">
    <div class="blockitems">
      <v-list-item-avatar class="mt-5">
        <v-img
          class="elevation-6"
          alt=""
          :src="avatar"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="blue--text text--accent-3 font-weight-medium" v-text="userName"></v-list-item-title>
        <v-list-item-subtitle class="grey--text" v-text="userEmail"></v-list-item-subtitle>
      </v-list-item-content>
    </div>
    <div>
      <v-btn @click="enjoyUser = !enjoyUser" text>
        <v-icon v-if="!enjoyUser">mdi-heart</v-icon>
        <v-icon v-else color="blue">mdi-heart</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
// HEART => JUST FOR SIMULATION !!
export default {
  props: {
    avatar: String,
    userEmail: String,
    userName: String
  },
  data () {
    return {
      enjoyUser: false
    }
  }
}
</script>

<style>
.a {
    border: 1px solid red
  }
  .containerRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .welcome {
    padding: 20px;
    display: flex;
  }
  .global {
    font-family: Poppins;
  }
  .blockitems{
    display: flex;
  }
</style>
