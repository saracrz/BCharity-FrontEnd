<template>
  <v-app>
    <v-app-bar :elevation="1" fixed app>
      <i class="fas fa-chevron-left" @click="goBack()"></i>
      <nuxt-link to="/welcome" class="logo ml-2">
        bcharity
      </nuxt-link>
      <v-spacer />

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('~/assets/079801.jpg')"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-if="userName">{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-footer>
          <v-btn text @click="logout">Cerrar Sesión</v-btn>
        </v-footer>
      </v-list>
    </v-navigation-drawer>

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
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Perfil', icon: 'mdi-account', to: '/infopersonal' },
        { title: 'Search Ad', icon: 'mdi-magnify', to: '/search' },
        { title: 'My Ads', icon: 'mdi-account-card-details', to: '/my-ads' },
        { title: 'Messages', icon: 'mdi-android-messages', to: '' },
        {
          title: 'Favorite Ads',
          icon: 'mdi-heart-multiple-outline',
          to: '/favorite-ads'
        },
        { title: 'Settings', icon: 'mdi-settings-outline', to: '' }
      ]
    }
  },

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
  margin-top: 0px;
}
</style>
