<template>
  <v-app>
    <v-app-bar fixed app color="#54CEC3">
      <v-toolbar-title class="title-font">BC</v-toolbar-title>
      <v-spacer />
      <div v-if="userName">
        Hi {{ userName }}
        <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn text @click="logout">Logout</v-btn>
      </div>
      <v-btn v-else text to="/login">Entrar</v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app class="text-center title-font">
      <v-row align="center" justify="center">
        <span>&copy; 2019 - BCharity </span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName'])
  },
  methods: {
    logout() {
      this.$store.commit('clearToken')
    }
  }
}
</script>

<style scoped>
.title-font {
  font-family: 'Yeseva One', cursive;
}
</style>
