<template>
  <v-app>
    <v-app-bar :elevation="1" fixed app color="#54CEC3">
      <i class="fas fa-chevron-left" @click="goBack()"></i>
      <nuxt-link to="/welcome" class="logo ml-2">
        bcharity
      </nuxt-link>
      <v-spacer />
      <div v-if="userName">
        Hi {{ userName }}

        <v-btn text @click="logout">Logout</v-btn>
      </div>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-avatar>
        <img :src="require('~/assets/079801.jpg')" />
      </v-avatar>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app class="text-center ">
      <v-row align="center" justify="center">
        <span> For a better world! </span>
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
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.title-font {
  font-family: 'Yeseva One', cursive;
}
.logo {
  text-decoration: none;
  font-size: 22 px;
  color: black;
  font-family: 'Yeseva One', cursive;
}
</style>
