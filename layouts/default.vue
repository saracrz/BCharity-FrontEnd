<template>
  <v-app>
    <v-app-bar :elevation="1" fixed app>
      <v-btn text to="/login" class="body-2">BCharity</v-btn>
      <v-spacer />
      <div v-if="userName">
        Hi {{ userName }}

        <v-btn text @click="logout">Logout</v-btn>
      </div>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-avatar>
        <img :src="require('~/assets/079801.jpg')" alt="John" />
      </v-avatar>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app class="text-center ">
      <v-row align="center" justify="center">
        <span> BCharity </span>
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
