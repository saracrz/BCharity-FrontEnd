<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" cols="6">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon color="#54CEC3">mdi-heart</v-icon>
            </v-btn>
            <v-btn
              to="/perfilcolaboracionvolunt"
              class="mx-2"
              outlined
              fab
              x-small
              color="#54CEC3"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>
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
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
