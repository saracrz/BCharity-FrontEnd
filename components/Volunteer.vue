<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" class="mb-0" cols="6">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
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
  data: () => ({
    cards: [
      {
        title: 'Carlos',
        src: require('~/static/Carlos.jpg')
      },
      {
        title: 'Laura',
        src: require('~/static/Laura.jpg')
      },
      {
        title: 'Marta',
        src: require('~/static/Laura.jpg')
      },
      {
        title: 'Martín',
        src: require('~/static/Carlos.jpg')
      }
    ]
  })
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
