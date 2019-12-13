<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="volunteer in volunteers"
        :key="volunteer._id"
        class="mb-0"
        cols="6"
      >
        <v-card
          :to="{
            path: '/perfilcolaboracionvolunt/' + volunteer._id
          }"
        >
          <v-img
            :src="volunteer.photoURL"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="volunteer.userId.name"></v-card-title>
            <nuxt-link class="logo ml-2" to="/perfilcolaboracionvolunt">
              Más
            </nuxt-link>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    volunteers: {
      type: Array,
      default: null
    }
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['getUserID', 'userName'])
  }
}
</script>

<style lang="scss" scoped>
.logo {
  color: #54cec3;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  float: right;
}
</style>
