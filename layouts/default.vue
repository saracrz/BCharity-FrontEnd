<template>
  <v-app>
    <v-app-bar :elevation="1" fixed app>
      <i class="fas fa-chevron-left" @click="goBack()"></i>
      <nuxt-link text to="/welcome" class="logo ml-2">
        BCharity
      </nuxt-link>
      <v-spacer />

      <v-app-bar-nav-icon
        v-if="getToken"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-if="getToken" v-model="drawer" app right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="photoURL"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-footer>
          <v-btn text @click="logout">Salir</v-btn>
        </v-footer>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer fixed app class="text-center ">
      <v-row align="center" justify="center">
        <span> </span>
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
        {
          title: 'Alta paciente',

          to: '/altapaciente'
        },
        {
          title: 'Alta voluntario',

          to: '/altavoluntario'
        },
        {
          title: 'Mensajes',

          to: '/volunteermessages'
        },
        {
          title: 'Favorite',

          to: '/favorite-ads'
        },
        { title: 'Settings', to: '' }
      ],
      photoURL:
        'https://images.unsplash.com/photo-1495383294417-3166600af8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
    }
  },

  computed: {
    ...mapGetters(['getToken', 'userName'])
  },
  methods: {
    logout() {
      this.$store.commit('clearToken')
      this.$router.push('/')
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
  font-size: 26 px;
  color: black;
  font-family: 'Yeseva One', cursive;
  margin-top: 0px;
}
</style>
