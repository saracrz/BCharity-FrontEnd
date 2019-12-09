<template>
  <div>
    <v-img height="300" :src="require('~/static/Carlos.jpg')"></v-img>

    <v-card-title>Carlos</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">
        Gran Canaria
      </div>
      <p>
        Carlos es ingeniero de software y trabaja como Full Stack Developer en
        Las Palmas. Le gusta ir al cine, hacer deporte, especialmente el
        piragüísmo, leer novelas policíacas y compartir momentos con sus amigos
        y familia. Ha viajado como voluntario por muchos países (Asia y
        Sudamérica) trabajando en proyectos de colaboración humanitaria. Le
        encantaría ayudar a personas que necesiten de su compañía.
      </p>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        id="button-voluntarios"
        to="/confirmationcolaboration"
        center
        color="#54CEC3"
        justify="align-center"
        class="mx-auto mr-8 my-6 white--text"
        >Proponer Colaboración</v-btn
      >
    </v-card-actions>
    <h4 class="mx-4 my-2">Reseñas:</h4>

    <Review></Review>
  </div>
</template>

<script>
import Review from '@/components/Review.vue'
export default {
  components: {
    Review
  }
}
</script>

<style lang="scss" scoped>
#button-voluntarios {
  width: 300px;
  align-content: center;
}
</style>
