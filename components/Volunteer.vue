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
            path: '/perfilcolaboracionvolunt/' + '5defc332b8746e329fa553d7'
          }"
        >
          <v-img
            :src="volunteer.photoURL"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="volunteer.name"></v-card-title>
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
export default {
  props: {
    volunteers: {
      type: Array,
      default: null
    }
  },
  data: () => ({})
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
